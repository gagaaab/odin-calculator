
let firstNumber = ''
let secondNumber = ''
let operator = ''

const digits = document.querySelectorAll('.digit')

digits.forEach((button) =>
        button.addEventListener('click', () => {
            if(answer !== '') {
            clear()
            equation.textContent = ''
            }
            if(firstNumber === '0') {
            firstNumber = ''
            }
            if(firstNumber !== '0' && secondNumber === '0') {
            secondNumber = ''
            }
            if(!operator && firstNumber < 100000000) {
            firstNumber += button.textContent
            } 
            if(operator && secondNumber < 100000000) {
            secondNumber += button.textContent
            }
            updateDisplay()
        }))

const zeroDigit = document.querySelectorAll('.zeroDigit')

zeroDigit.forEach((button) =>
        button.addEventListener('click', () => {
            if(firstNumber === '0') {
            firstNumber = ''
            }
            if(firstNumber !== '0' && secondNumber === '0') {
            secondNumber = ''
            }
            if(!operator && firstNumber < 100000000) {
            firstNumber += button.textContent
            } 
            if(operator && secondNumber < 100000000) {
            secondNumber += button.textContent
            }
            updateDisplay()
        }))

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
        if(answer !== '') {
        clear()
        equation.textContent = ''
        firstNumber = '0.'
        }
        else if(secondNumber.toString().includes('.')) {
            return false
        }
        else if(firstNumber.toString().includes('.') && !operator) {
            return false
        }
        else if(!operator) {
        firstNumber += '.'
        } 
        else {
            if (secondNumber == '') {
                secondNumber = '0.'
            }
            else {
                secondNumber += '.'
            }
        }
        updateDisplay()
        })

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
            answer = ''
            operator = button.textContent
        } 
        else {
            operator = button.textContent
        }
        equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
        updateDisplay()
    }))

const equation = document.querySelector('.equation')
function updateDisplay() {
    if (!answer && !secondNumber) {
        answerDisplay.textContent = firstNumber
    } else if (answer) {
        answerDisplay.textContent = answer
        if (answer > 10000000) {
            answerDisplay.textContent = Number(answer).toExponential(3)
        }
    } else {
        answerDisplay.textContent = secondNumber
    }
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
        default:
            return Number(a)
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
    equation.textContent = `${firstNumber} ${operator} ${secondNumber} =`
})

function clear() {
    firstNumber = ''
    secondNumber = ''
    operator = ''
    answer = ''
    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
    updateDisplay()
}

const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => {
    clear()
})

const deleteBtn = document.querySelector('.delete')
deleteBtn.addEventListener('click', () => {
    if(!operator) {
    firstNumber = firstNumber.toString().slice(0, -1)
    } 
    else if (operator && secondNumber == '') {
        operator = ''
    }
    else {
    secondNumber = secondNumber.toString().slice(0, -1)
    }
    answer = ''
    updateDisplay()
})