import Table from "./Table.js";
import Cell from "./Cell.js";

const tab_2048 = document.querySelector(".tab_2048");
const scoreField = document.querySelector(".score");
let score = 0;

const valuesTab = []; // move to setUp()
let asWin = false;

for (let i = 0; i < 4; i++){ // move to setUp()
    valuesTab.push([]);
    for (let j = 0; j < 4; j++) valuesTab[i][j] = new Cell(0);
}

const tab = new Table(valuesTab); // move to setUp()
tab.addRandomCell();

/*tab.addCell(0, 0, 2); // move to setUp()
tab.addCell(0, 1, 4);
tab.addCell(0, 2, 8);
tab.addCell(0, 3, 16);
tab.addCell(1, 0, 32);
tab.addCell(1, 1, 64);
tab.addCell(1, 2, 128);
tab.addCell(1, 3, 256);
tab.addCell(2, 0, 512);
tab.addCell(2, 1, 1024);
tab.addCell(2, 2, 2048);
tab.addCell(2, 3, 4096);
tab.addCell(3, 0, 2);
tab.addCell(3, 1, 4);
tab.addCell(3, 2, 8);*/

export function addToScore(value) {
    score += value;
}

function render() {
    tab_2048.innerHTML = tab.render();
    scoreField.innerHTML = score + " pts";

    if(tab.isFull()) {
        if(!tab.canMoveOne()) alert("game over");
    }
    if(!asWin && tab.contains(2048)) {
        asWin = true;
        alert("GG well play");
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

    const keypressed = event.key;
    if(keypressed === 'ArrowLeft') moveLeft();
    if(keypressed === 'ArrowUp') moveUp();
    if(keypressed === 'ArrowDown') moveDown();
    if(keypressed === 'ArrowRight') moveRight();
})