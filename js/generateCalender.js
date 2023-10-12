import { months } from "./const.js";

const generateCalender = (month, year) => {
  document.querySelectorAll(".calender__table tbody")[0].innerHTML = "";
  let monthYearHeading = document.querySelector(".calender__date-month");

  let count = 0;
  let dayone = new Date(year, month, 1).getDay();

  let lastdate = new Date(year, month + 1, 0).getDate();

  let dayend = new Date(year, month, lastdate).getDay();

  let monthlastdate = new Date(year, month, 0).getDate();

  monthYearHeading.innerHTML = `${months[month]} ${year}`;
  let tbody = document
    .querySelector(".calender__table")
    .getElementsByTagName("tbody")[0];

  let newRow = tbody.insertRow();

  // insert previous month dates
  for (let i = dayone; i > 0; i--) {
    if (count % 7 == 0) {
      newRow = tbody.insertRow();
    }

    let newCell = newRow.insertCell();
    newCell.className = "inactive";
    let newText = document.createTextNode(`${monthlastdate - i + 1}`);
    newCell.appendChild(newText);

    tbody.appendChild(newCell);
    count++;
  }

  // insert current month dates
  for (let i = 1; i <= lastdate; i++) {
    if (count % 7 == 0) {
      newRow = tbody.insertRow();
    }

    let newCell = newRow.insertCell();
    let newText = document.createTextNode(`${i}`);
    newCell.appendChild(newText);

    tbody.appendChild(newCell);
    count++;
  }

  // insert next month dates
  for (let i = dayend; i < 6; i++) {
    if (count % 7 == 0) {
      newRow = tbody.insertRow();
    }

    let newCell = newRow.insertCell();
    newCell.className = "inactive";
    let newText = document.createTextNode(`${i - dayend + 1}`);
    newCell.appendChild(newText);

    tbody.appendChild(newCell);
    count++;
  }
};

export { generateCalender };
