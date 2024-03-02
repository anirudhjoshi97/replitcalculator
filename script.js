const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.input')
let displayValue = ''
let firstValue = null
let operator = null

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent

    if (!isNaN(value)) {
      displayValue += value
      display.value = displayValue
    } else if (value === '=') {
      calculate()
    } else if (value === 'C') {
      displayValue = ''
      firstValue = null
      operator = null
      display.value = 0
    } else {
      firstValue = !firstValue ? +displayValue : firstValue
      operator = value
      displayValue = ''
    }
  })
})

function calculate() {
  const secondValue = +displayValue

  switch (operator) {
    case '+':
      displayValue = firstValue + secondValue
      break
    case '-':
      displayValue = firstValue - secondValue
      break
    case '*':
      displayValue = firstValue * secondValue
      break
    case '/':
      displayValue = firstValue / secondValue
      break
  }

  display.value = displayValue.toFixed(2)
  firstValue = null
  operator = null
}
