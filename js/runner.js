import { generateCalender } from "./generateCalender.js";
import { shiftCalenderMonth } from "./shiftCalenderMonth.js";

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

generateCalender(month, year);

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const resetButton = document.querySelector(".reset");

// add event listeners
previousButton.onclick = () => {
  shiftCalenderMonth(previousButton, month, year);
  month--;
};
nextButton.onclick = () => {
  shiftCalenderMonth(nextButton, month, year);
  month++;
};
resetButton.onclick = () => {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth();
  console.log(month, year);
  shiftCalenderMonth(resetButton, month, year);
};
