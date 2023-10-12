import { generateCalender } from "./generateCalender.js";
import { shiftCalenderMonth } from "./shiftCalenderMonth.js";

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

generateCalender(month, year);

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const resetButton = document.querySelector(".reset");
const dateButtons = document.querySelectorAll(".date-btn");

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
  shiftCalenderMonth(resetButton, month, year);
};

dateButtons.forEach((item) => {
  let eventSet = false;
  item.addEventListener("click", () => {
    if (!eventSet) {
      const alreadyModal = document.querySelector("#modal-background");
      alreadyModal !== null ? alreadyModal.remove() : {};
      const modalBg = document.createElement("div");
      modalBg.id = "modal-background";
      const modal = document.createElement("div");
      modal.id = "modal";

      const closeSpan = document.createElement("span");
      closeSpan.id = "close-btn";
      closeSpan.innerHTML = "&times;";

      const para = document.createElement("p");
      para.textContent = "Add Event";

      const input = document.createElement("input");
      input.setAttribute("type", "text");

      const buttons = document.createElement("div");

      const saveBtn = document.createElement("button");
      saveBtn.className = "save";
      saveBtn.textContent = "Save";
      buttons.appendChild(saveBtn);

      modal.appendChild(closeSpan);
      modal.appendChild(para);
      modal.appendChild(input);
      modal.appendChild(buttons);

      modalBg.appendChild(modal);
      document.body.appendChild(modalBg);

      let closeBtn = document.getElementById("close-btn");

      closeBtn.addEventListener("click", function () {
        modalBg.style.display = "none";
      });

      window.addEventListener("click", function (event) {
        if (event.target === modalBg) {
          modalBg.style.display = "none";
        }
      });

      saveBtn.onclick = () => {
        modalBg.style.display = "none";
        const addedEvent = input.value;
        const hiddenEvent = document.createElement("span");
        hiddenEvent.innerText = addedEvent;
        hiddenEvent.hidden = true;
        item.appendChild(hiddenEvent);
        eventSet = true;
      };
    }
  });
});
