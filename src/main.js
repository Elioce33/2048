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

function render() {
    tab_2048.innerHTML = tab.render();
    if(tab.isFull()) {
        if(!tab.canMoveOne()) alert("game over");
    }
}


render();

const b_left = document.querySelector("#left");
const b_up = document.querySelector("#up");
const b_down = document.querySelector("#down");
const b_right = document.querySelector("#right");

function moveLeft() {
    if(tab.moveLeft()) tab.addRandomCell();
    render();
}

function moveUp() {
    if(tab.moveUp()) tab.addRandomCell();
    render();
}

function moveDown() {
    if (tab.moveDown()) tab.addRandomCell();
    render();
}

function moveRight() {
    if (tab.moveRight()) tab.addRandomCell();
    render();
}

b_left.addEventListener('click', moveLeft);
b_up.addEventListener('click', moveUp);
b_down.addEventListener('click', moveDown);
b_right.addEventListener('click', moveRight);

document.addEventListener("keyup", (event) => {
    console.log(event.key);

    const keypressed = event.key;
    if(keypressed === 'ArrowLeft') moveLeft();
    if(keypressed === 'ArrowUp') moveUp();
    if(keypressed === 'ArrowDown') moveDown();
    if(keypressed === 'ArrowRight') moveRight();
})