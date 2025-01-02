import { operate } from "./mathOper.js";

let currentInput = "";
let previousInput = "";
let operator = "";

export function resetCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("");
}

export function updateDisplay(value) {
  const display = document.getElementById("display");
  display.value = value;
}

export function appendToDisplay(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

export function deleteFromDisplay() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

export function setOperator(op) {
  if (previousInput === "" && currentInput !== "") {
    previousInput = currentInput;
    currentInput = "";
  }
  operator = op;
}

export function calculateResult() {
  if (previousInput !== "" && currentInput !== "") {
    // Perform the calculation
    const result = operate(
      Number(previousInput),
      Number(currentInput),
      operator
    );

    // Display the result and update previousInput
    updateDisplay(result);

    // Set the result as previousInput for further operations
    previousInput = result;
    currentInput = ""; // Clear current input for the next value
  }
}
