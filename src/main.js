import Table from "./Table.js";
import Cell from "./Cell.js";

import $ from 'jquery';

const $tab_2048 = $(".tab_2048");
const $scoreField = $(".score");
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
    $tab_2048.html(tab.render());
    $scoreField.html(score);

    if(tab.isFull()) {
        if(!tab.canMoveOne()) alert("game over");
    }
    if(!asWin && tab.contains(2048)) {
        asWin = true;
        alert("GG well play");
    }
}

render();

const $left = $("#left");
const $up = $("#up");
const $down = $("#down");
const $right = $("#right");

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

$left.on('click', moveLeft);
$up.on('click', moveUp);
$down.on('click', moveDown);
$right.on('click', moveRight);

$(document).on("keyup", (event) => {

    const key = event.key;
    if(key === 'ArrowLeft') moveLeft();
    if(key === 'ArrowUp') moveUp();
    if(key === 'ArrowDown') moveDown();
    if(key === 'ArrowRight') moveRight();
})