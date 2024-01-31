
let firstNumber = ''
let secondNumber = ''
let operator = ''

const digits = document.querySelectorAll('.digit')
const equation = document.querySelector('.equation')
digits.forEach((button) =>
        button.addEventListener('click', () => {
            if(answer && secondNumber !== '') {
            clear()
            }
            if(!operator) {
            firstNumber += button.textContent
            } 
            else {
            secondNumber += button.textContent
            }
            updateDisplay()
        }))

const operators = document.querySelectorAll('.operator')
operators.forEach((button) =>
    button.addEventListener('click', () => {
        if(operator) {
            solve()
            operator = button.textContent
        }
        if (answer) {
            firstNumber = answer
            secondNumber = ''
            operator = button.textContent
            updateDisplay()
        } 
        else {
            operator = button.textContent
            updateDisplay()
        }
    }))

function updateDisplay() {
    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
    answerDisplay.textContent = answer
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

function solve() {
    answer = Math.round(operate(firstNumber, secondNumber, operator) * 1000) / 1000
    updateDisplay()
}

let answer = ''
const equalBtn = document.querySelector('.equal')
const answerDisplay = document.querySelector('.answer')
equalBtn.addEventListener('click', () => {
    solve()
})

function clear() {
    firstNumber = ''
    secondNumber = ''
    operator = ''
    answer = ''
    updateDisplay()
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
    clear()
})

const deleteBtn = document.querySelector('.delete')
deleteBtn.addEventListener('click', () => {
    if(!operator) {
    firstNumber = firstNumber.slice(0, -1)
    } 
    else if (operator && secondNumber == '') {
        operator = ''
    }
    else {
    secondNumber = secondNumber.slice(0, -1)
    }
    answer = ''
    updateDisplay()
})