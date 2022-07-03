let containerDiv = document.querySelector(`.container`);
const body = document.querySelector(`body`);

let columnNumber = 48;
let rowNumber = 48;
let columnReset;
let rowReset;

startGame();

const button = document.querySelector(`button`);

button.addEventListener(`click`, () => {
  body.removeChild(containerDiv);
  columnNumber = prompt(`Type in the columns: `, 48);
  rowNumber = prompt(`Type in the rows: `, 48);

  containerDiv = document.createElement(`div`);
  containerDiv.classList.add(`container`);
  body.appendChild(containerDiv);

  startGame();
});

function startGame() {
  for (let i = 0; i < columnNumber; i++) {
    column = document.createElement(`div`);
    containerDiv.appendChild(column);
    column.setAttribute(`class`, `column`);
    column.setAttribute(`id`, `column[${i}]`);
    for (let j = 0; j < rowNumber; j++) {
      row = document.createElement(`div`);
      row.setAttribute(`class`, `row`);
      row.setAttribute(`id`, `column[${i}]row[${j}]`);
      column.appendChild(row);
    }
  }
  const rowsBox = Array.from(document.querySelectorAll(`.row`));
  for (let i = 0; i < rowNumber * columnNumber; i++) {
    rowsBox[i].addEventListener(`mouseenter`, (e) =>
      e.target.classList.add("active")
    );
  }
}
