const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const product = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;

const operate = function(num1, num2, symbol) {
  if (symbol === '+') return add(num1, num2); 
  if (symbol === '-') return sub(num1, num2); 
  if (symbol === '*') return product(num1, num2); 
  if (symbol === '/') return divide(num1, num2); 
};

const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators')
const display = document.querySelector('#display');

const firstTerm = document.createElement('div');
firstTerm.setAttribute('id', 'firstTerm');

const secondTerm = document.createElement('div');
secondTerm.setAttribute('id', 'secondTerm');

const thirdTerm = document.createElement('div');
thirdTerm.setAttribute('id', 'thirdTerm');


digits.forEach(digits => digits.addEventListener('click', (event) => {
	firstNum = digits.textContent;
	firstTerm.textContent += firstNum;
  display.appendChild(firstTerm);
}));

operators.forEach(operators => operators.addEventListener('click', () => {
	operator = operators.textContent;
	secondTerm.textContent = operator;
	display.appendChild(secondTerm);
}));