import {
  appendToDisplay,
  deleteFromDisplay,
  resetCalculator,
  setOperator,
  calculateResult,
} from "./calculator.js";

export function addEventListeners() {
  // Number buttons
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  // Operator buttons (using querySelector for each operator)
  document
    .querySelector("#add")
    .addEventListener("click", () => setOperator("+"));
  document
    .querySelector("#subtract")
    .addEventListener("click", () => setOperator("-"));
  document
    .querySelector("#multiply")
    .addEventListener("click", () => setOperator("*"));
  document
    .querySelector("#divide")
    .addEventListener("click", () => setOperator("/"));

  // Equal button
  document.querySelector("#equal").addEventListener("click", calculateResult);

  // Other buttons (Clear and Backspace)
  document.querySelector("#clear").addEventListener("click", resetCalculator);
  document
    .querySelector("#backspace")
    .addEventListener("click", deleteFromDisplay);
}

function handleButtonClick(event) {
  const value = event.target.textContent;
  const display = document.querySelector("#display");

  // Access currentInput from the display input's value
  let currentInput = display.value;

  if ((value >= "0" && value <= "9") || value === ".") {
    if (value === "." && !currentInput.includes(".")) {
      appendToDisplay(value);
    } else if (value !== ".") {
      appendToDisplay(value);
    }
  }
}
