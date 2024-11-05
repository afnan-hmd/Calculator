const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operation = document.querySelectorAll('operation');
const functionBtn = document.querySelectorAll('functionBtn');
const equals = document.querySelector('equals');

let previousNum;
let operator;
let currentNum;

function add (a, b) {return a + b}
function subtract (a, b) {return a - b}
function multiply (a, b) {return a * b}
function divide (a, b) {
    if (b == 0) {return 'lmao'}
    else {return a / b}
}

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

function updateDisplay (e) {
    let value = e.target.id;
    let previousNum = 0;
    let currentNum = 0;
    let result;
    operator;
    negativeCounter = 1;

    if (e.target.classList.contains('operation')) {
        operator = value;
        display.textContent = '';
        display.textContent = operator;
        let result = operate (Number(previousNum), Number(currentNum), operator);
        currentNum = result;
        display.textContent = currentNum;
    } 
    else if (e.target.classList.contains('functionBtn')) {
        switch (value) {
            case 'AC':
                display.textContent = " ";
                currentNum = 0; previousNum = 0; operator = null;
                break;
            case '%':
                currentNum /= 100;
                display.textContent = currentNum;
                break;
            case 'negative':
                currentNum *= -1;
                display.textContent = currentNum;
                break;
        }
    }
    else {
        display.textContent += value;
        currentNum = display.textContent;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});
