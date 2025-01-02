// Importing all required modules
import { addEventListeners } from "./domElements.js";
import {
  resetCalculator,
  updateDisplay,
  appendToDisplay,
  deleteFromDisplay,
  setOperator,
  calculateResult,
} from "./calculator.js";

// Initialize event listeners when the page is loaded
window.onload = () => {
  addEventListeners(); // Initialize button event listeners
};
