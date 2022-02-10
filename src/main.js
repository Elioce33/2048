import Table from "./Table.js";
import Cell from "./Cell.js";

const tab_2048 = document.querySelector(".tab_2048");

const valuesTab = [];
valuesTab.push([]);
valuesTab.push([]);
valuesTab.push([]);
valuesTab.push([]);

for (let i = 0; i < 4; i++)
    for (let j = 0; j < 4; j++)
        valuesTab[i][j] = new Cell(0);

// valuesTab[Math.floor(Math.random() * valuesTab.length)][Math.floor(Math.random() * valuesTab.length)] = new Cell(2);

const tab = new Table(valuesTab);
tab.addRandomCell();

tab_2048.innerHTML = tab.render();

const b_left = document.querySelector("#left");
const b_up = document.querySelector("#up");
const b_down = document.querySelector("#down");
const b_right = document.querySelector("#right");


b_left.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("left");
    tab.moveLeft();
    tab_2048.innerHTML = tab.render();
})

b_up.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("up");
    tab.moveUp();
    tab_2048.innerHTML = tab.render();
})

b_down.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("down");
    tab.moveDown();
    tab_2048.innerHTML = tab.render();
})

b_right.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("right");

    tab.moveRight();
    tab_2048.innerHTML = tab.render();
})