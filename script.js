const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const operation = document.querySelectorAll('.operation');
const functionBtn = document.querySelectorAll('.functionBtn');
const equals = document.querySelector('.equals');

let previousNum = 0;
let operator = null;
let currentNum = null;

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
            else {return (a / b)}
            break;
    }
}

function resetDisplay () {
    previousNum = 0;
    currentNum = null;
    operator = null;
    display.textContent = previousNum;
}
// asses if this is necessary :3
function resetOperation () {
    currentNum = null;
    operator = null;
    // fix this
    console.log(`prev (reset): ${previousNum}`);
}
function updateDisplay (e) {
    let value = e.target.id;

    if (e.target.classList.contains('operation')) {
        // perv doesnt get updated
        console.log(`current op: ${currentNum}`);
        console.log(`prev op: ${previousNum}`);
        console.log(`operator: ${operator}`);
        
        if ((currentNum != null) && (operator != null)) {
            let result = operate (Number(previousNum), Number(currentNum), operator);
            previousNum = result;
            display.textContent = `${result}`;
            currentNum = null;
        } else if (currentNum == null) {
            operator = value;
            previousNum = Number(display.textContent);
            display.textContent = `${operator}`;
            console.log(`prev op meowmeow: ${previousNum}`);
        }
        else {
            resetDisplay();
        }
        // fix: prev is always reseted b4 operation & new current doesnt get
        // recorded properly 
        console.log(`current op meow: ${currentNum}`);
        console.log(`prev op meow: ${previousNum}`);
    } 
    else if (e.target.classList.contains('functionBtn')) {
        switch (value) {
            case 'AC':
                resetDisplay();
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
    else if (e.target.classList.contains('equals')) {
        let result = operate (Number(previousNum), Number(currentNum), operator);
        previousNum = result;
        console.log(`prev result: ${previousNum}`);
        display.textContent = `${result}`;;
        resetOperation();
    }
    else {
        display.textContent += `${value}`;
        currentNum = Number(display.textContent);
        // console.log(currentNum);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', updateDisplay)
});
