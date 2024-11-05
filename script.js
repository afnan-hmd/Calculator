const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operation = document.querySelectorAll('operation');
const functionBtn = document.querySelectorAll('functionBtn');
const equals = document.querySelector('equals');

let firstNumber;
let operator;
let secondNumber;
let displayedValue;

function add (a, b) {return a + b}
function subtract (a, b) {return a - b}
function multiply (a, b) {return a * b}
function divide (a, b) {
    if (b == 0) {return 'lmao'}
    else {return a / b}
}

function operate (firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
            break;
        case '-':
            return subtract(firstNumber, secondNumber);
            break;
        case '*':
            return multiply(firstNumber, secondNumber);
            break;
        case '/':
            return divide(firstNumber, secondNumber);
            break;
    }
}

function updateDisplay (e) {
    let value = e.target.id;
    let firstNumber = 0;
    let secondNumber = 0;
    let operator = "";

    if (e.target.classList.contains('equals')) {
        secondNumber = Number(display.textContent);
        let result = operate (firstNumber, secondNumber, operator);
        display.textContent = result;
    }   
    else if ((e.target.classList.contains('operation')) || (e.target.classList.contains('functionBtn'))) {
        firstNumber = Number(display.textContent);
        operator = value;
        display.textContent = '';
        display.textContent = value;
    } else {
        display.textContent += value;
    }

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operator);
}

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});
