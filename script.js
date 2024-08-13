const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

function add (a, b) {return a + b}
function subtract (a, b) {return a - b}
function multiply (a, b) {return a * b}
function divide (a, b) {
    if (b == 0) {return 'lmao'}
    else {return a / b}
}

let firstNumber;
let operator;
let secondNumber;
let displayedValue;

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
    display.textContent = e.target.id;
    console.log(e.target.id);
}

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});
