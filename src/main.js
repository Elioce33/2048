import Table from "./Table.js";
import Cell from "./Cell.js";

const tab_2048 = document.querySelector(".tab_2048");

const valuesTab = [];

for (let i = 0; i < 4; i++){
    valuesTab.push([]);
    for (let j = 0; j < 4; j++) valuesTab[i][j] = new Cell(0);
}

const tab = new Table(valuesTab);
tab.addRandomCell();

tab_2048.innerHTML = tab.render();

const b_left = document.querySelector("#left");
const b_up = document.querySelector("#up");
const b_down = document.querySelector("#down");
const b_right = document.querySelector("#right");


b_left.addEventListener('click', (event) => {
    event.preventDefault();

    if(tab.moveLeft()) tab.addRandomCell();
    tab_2048.innerHTML = tab.render();
})

b_up.addEventListener('click', (event) => {
    event.preventDefault();

    if(tab.moveUp()) tab.addRandomCell();
    tab_2048.innerHTML = tab.render();
})

b_down.addEventListener('click', (event) => {
    event.preventDefault();

    if (tab.moveDown()) tab.addRandomCell();
    tab_2048.innerHTML = tab.render();
})

b_right.addEventListener('click', (event) => {
    event.preventDefault();

    if (tab.moveRight()) tab.addRandomCell();
    tab_2048.innerHTML = tab.render();
})