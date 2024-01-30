
let firstNumber = ''
let secondNumber = ''
let operator = ''

const digits = document.querySelectorAll('.digit')
const equation = document.querySelector('.equation')
digits.forEach((button) =>
        button.addEventListener('click', () => {
            if(answer && secondNumber !== '') {
            firstNumber = ''
            secondNumber = ''
            operator = ''
            answer = ''
            answerDisplay.textContent = answer
            }
            if(!operator) {
            firstNumber += button.textContent
            } else {
            secondNumber += button.textContent
            }
            updateDisplay()
        }))

const operators = document.querySelectorAll('.operator')
operators.forEach((button) =>
    button.addEventListener('click', () => {
        if(operator) {
            answer = operate(firstNumber, secondNumber, operator)
            answerDisplay.textContent = answer
            operator = button.textContent
            updateDisplay()
        } if (answer) {
            firstNumber = answer
            secondNumber = ''
            operator = button.textContent
            updateDisplay()
        } else {
            operator = button.textContent
            updateDisplay()
        }
    }))

function updateDisplay() {
    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, symbol) {
    a = Number(a)
    b = Number(b)
    switch(symbol) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '×':
            return multiply(a, b)
        case '÷':
            return divide(a, b)
    }
}

let answer = ''
const equal = document.querySelector('.equal')
const answerDisplay = document.querySelector('.answer')
equal.addEventListener('click', () => {
    answer = operate(firstNumber, secondNumber, operator)
    answerDisplay.textContent = answer
})
