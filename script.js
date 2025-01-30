let display = document.getElementById('display');
let result = document.getElementById('sum-el')
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
    result.textContent = '';
}

function calculate() {
  try {
      let finalResult = eval(currentInput); // Use `eval` (with caution!)
      if (isNaN(finalResult) || !isFinite(finalResult)) {
        result.textContent = "Error";
        return;
    }

      display.value = finalResult;
      result.textContent = "Answer : " + finalResult;
      currentInput = finalResult.toString()
  } catch(e) {
    result.textContent = "Error"
  }
}