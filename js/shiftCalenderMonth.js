import { generateCalender } from "./generateCalender.js";

const shiftCalenderMonth = (btn, month, year) => {
  const currMonth = month;

  if (btn.className.includes("previous")) {
    month -= 1;
  } else if (btn.className.includes("next")) {
    month += 1;
  }

  let date = new Date(year, currMonth, new Date().getDate());

  let newYear = date.getFullYear();

  let newMonth = date.getMonth();

  generateCalender(newMonth, newYear);
};

export { shiftCalenderMonth };
