const containerDiv = document.querySelector(`#container`);

let columnNumber = 16;
let rowNumber = 16;

const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
  columnNumber = prompt(`Choose number of columns: `, 16);
  rowNumber = prompt(`Choose number of rows: `, 16);
  startGame();
});

startGame();

function startGame() {
  for (let i = 0; i < columnNumber; i++) {
    column = document.createElement(`div`);
    containerDiv.appendChild(column);
    column.setAttribute(`class`, `column`);
    for (let j = 0; j < rowNumber; j++) {
      row = document.createElement(`div`);
      row.setAttribute(`class`, `row`);
      row.setAttribute(`id`, `column[${i}]row[${j}]`);
      column.appendChild(row);
    }
  }
}
