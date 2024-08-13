const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operation = document.querySelectorAll('operation');

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
    if (e.target.classList.contains('operation')) {
        display.textContent = '';
        display.textContent = value;
    } else {
        display.textContent += value;
    }
    // display.textContent = e.target.id;
}

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});
