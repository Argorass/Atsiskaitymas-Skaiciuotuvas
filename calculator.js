import { operate } from "./mathOper.js";

let currentInput = "",
  previousInput = "",
  operator = "";

export const resetCalculator = () => {
  currentInput = previousInput = operator = "";
  updateDisplay("");
};

export const updateDisplay = (value) => {
  document.querySelector("#display").value = value; // Using querySelector
};

export const appendToDisplay = (value) => {
  currentInput += value;
  updateDisplay(currentInput);
};

export const deleteFromDisplay = () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
};

export const setOperator = (op) => {
  if (currentInput) {
    if (!previousInput) previousInput = currentInput;
    currentInput = "";
  }
  operator = op;
};

export const calculateResult = () => {
  if (previousInput && currentInput) {
    const result = operate(
      Number(previousInput),
      Number(currentInput),
      operator
    );
    updateDisplay(result);
    previousInput = result;
    currentInput = "";
  }
};
