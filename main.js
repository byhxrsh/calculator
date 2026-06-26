const add = (a, b) => Number(a) + Number(b);
const sub = (a, b) => a - b;
const product = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = '';
let secondNum = '';
let operatorSign = '';
let state = 'first';

const operate = function(num1, num2, symbol) {
  if (symbol === '+') return add(num1, num2); 
  if (symbol === '-') return sub(num1, num2); 
  if (symbol === '*') return product(num1, num2); 
  if (symbol === '/') return divide(num1, num2); 
};

const digits = document.querySelectorAll('.digit');
const calculate = document.querySelector('.calculate');
const operators = document.querySelectorAll('.operator')
const display = document.querySelector('#display');
const clear = document.querySelector('#AC');
const backspace = document.querySelector('#backspace');
const decimal = document.querySelector('#decimal');

digits.forEach(digit => digit.addEventListener('click', () => {

  if (state === 'first') {
    clear.textContent = 'AC';
    firstNum += digit.textContent;
    display.textContent = firstNum;
  };
  
  if (state === 'second') {
    secondNum += digit.textContent;
    display.textContent = secondNum;
  };
  
}));

operators.forEach(operator => operator.addEventListener('click', () => {
  if (firstNum != '' && operatorSign === '/' && secondNum === '0') {
    alert(`bruh! you weren't supposed to divide it by zero`);
    display.textContent = 're-enter last number'
    secondNum = '';
  }; 

  if (firstNum != '' && secondNum != '' && operatorSign != '') {
    firstNum = operate(firstNum, secondNum, operatorSign);
    secondNum = '';
    display.textContent = firstNum;
    operatorSign = operator.textContent;
    state = 'second';
  } else {
    operatorSign = operator.textContent;
    state = 'second';
  };
}));

calculate.addEventListener('click', () => {

  if (firstNum != '' && operatorSign === '/' && secondNum === '0') {
    alert(`bruh! you weren't supposed to divide it by zero`);
    display.textContent = 're-enter last number'
    secondNum = '';
  } else {
    firstNum = operate(firstNum, secondNum, operatorSign);
    secondNum = '';
    display.textContent = firstNum;
  };

});

clear.addEventListener('click', () => {
  state = 'first';
  display.textContent = 0;
  firstNum = '';
  secondNum = '';
  operatorSign = '';
  clear.textContent = 'C';
});

backspace.addEventListener('click', () => {
  if (firstNum != '' && operatorSign === '' && secondNum === '') {
    let length = firstNum.length;
    firstNum = firstNum.substring(0, (length - 1));
    display.textContent = firstNum;
  }; 
  
  if (firstNum != '' && operatorSign != '' && secondNum != '') {
    let length = secondNum.length;
    secondNum = secondNum.substring(0, (length - 1));
    display.textContent = secondNum;
  };
  
});


decimal.addEventListener('click', () => {

  if (state === 'first' && !firstNum.includes('.')) {
    firstNum += decimal.textContent;
    display.textContent = firstNum;
  };
  
  if (state === 'second' && !secondNum.includes('.')) {
    secondNum += decimal.textContent;
    display.textContent = secondNum;
  };
  
});

document.addEventListener('keydown', (event) => {

  if (event.key >= 0 && event.key <= 9) {
    event.preventDefault();

    if (state === 'first') {
      clear.textContent = 'AC';
      firstNum += event.key;
      display.textContent = firstNum;
    };
  
    if (state === 'second') {
      secondNum += event.key;
      display.textContent = secondNum;
    };
  };

});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {

    if (firstNum != '' && operatorSign === '' && secondNum === '') {
      let length = firstNum.length;
      firstNum = firstNum.substring(0, (length - 1));
      display.textContent = firstNum;
    }; 
  
    if (firstNum != '' && operatorSign != '' && secondNum != '') {
      let length = secondNum.length;
      secondNum = secondNum.substring(0, (length - 1));
      display.textContent = secondNum;
    };

  }
}); 

document.addEventListener('keydown', (event) => {
  if (event.key === '*' || event.key === '+' || event.key === '-' || event.key === '/') {

    if (firstNum != '' && operatorSign === '/' && secondNum === '0') {
      alert(`bruh! you weren't supposed to divide it by zero`);
      display.textContent = 're-enter last number'
      secondNum = '';
    }; 

    if (firstNum != '' && secondNum != '' && operatorSign != '') {
      firstNum = operate(firstNum, secondNum, operatorSign);
      secondNum = '';
      display.textContent = firstNum;
      operatorSign = event.key;
      state = 'second';
    } else {
      operatorSign = event.key;
      state = 'second';
    };

  }
});