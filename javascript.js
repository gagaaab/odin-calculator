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

let firstNumber = ''
let secondNumber = ''
let operator = ''

const digits = document.querySelectorAll('.digit')
const equation = document.querySelector('.equation')
digits.forEach((button) =>
        button.addEventListener('click', () => {
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
        operator = button.textContent
        updateDisplay()
    }))

function updateDisplay() {
    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
}
