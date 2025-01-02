import {
  appendToDisplay,
  deleteFromDisplay,
  resetCalculator,
  setOperator,
  calculateResult,
} from "./calculator.js";

export function addEventListeners() {
  // Number buttons
  const numbers = document.querySelectorAll(".button");
  numbers.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  // Operator buttons
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
  document.getElementById("equal").addEventListener("click", calculateResult);

  // Other buttons
  document.querySelector("#clear").addEventListener("click", resetCalculator);
  document
    .querySelector("#backspace")
    .addEventListener("click", deleteFromDisplay);
}

function handleButtonClick(event) {
  const value = event.target.textContent;

  if (value >= "0" && value <= "9") {
    appendToDisplay(value);
  } else if (value === ".") {
    if (!currentInput.includes(".")) {
      appendToDisplay(value);
    }
  }
}
