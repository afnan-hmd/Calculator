
function add (a, b) {return a + b}
function subtract (a, b) {return a - b}
function multiply (a, b) {return a * b}
function divide (a, b) {
    if (b == 0) {return 'lmao'}
    else {return a / b}
}

let firstNumber;
let operator;
let secondNumber

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