const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operation = document.querySelectorAll('operation');
const functionBtn = document.querySelectorAll('functionBtn');
const equals = document.querySelector('equals');

var secInMilliseconds = 1000;
let previousNum = 0;
let operator;
let currentNum = 0;

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            return (a + b);
            break;
        case '-':
            return (a - b);
            break;
        case '*':
            return (a * b);
            break;
        case '/':
            if (b == 0) {return 'lmao'}
            else {return a / b}
            break;
    }
}

function updateDisplay (e) {
    let value = e.target.id;

    if (e.target.classList.contains('operation')) {
        operator = value;
        display.textContent = '';
        display.textContent = operator;

        let result = operate (Number(previousNum), Number(currentNum), operator);
        previousNum = result;
        currentNum = 0;
        setTimeout(() => {
            display.textContent = result;
          }, 3 * secInMilliseconds)
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
        currentNum = Number(display.textContent);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});
