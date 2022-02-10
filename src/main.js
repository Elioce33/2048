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

//valuesTab[Math.floor(Math.random() * valuesTab.length)][Math.floor(Math.random() * valuesTab.length)] = new Cell(2);

valuesTab[0][0] = new Cell(2);
valuesTab[0][1] = new Cell(4);
valuesTab[0][2] = new Cell(8);
valuesTab[0][3] = new Cell(16);
valuesTab[1][0] = new Cell(32);
valuesTab[1][1] = new Cell(64);
valuesTab[1][2] = new Cell(128);
valuesTab[1][3] = new Cell(256);
valuesTab[2][0] = new Cell(512);
valuesTab[2][1] = new Cell(1024);
valuesTab[2][2] = new Cell(2048);
valuesTab[2][3] = new Cell(4096);

const tab = new Table(valuesTab);
tab_2048.innerHTML = tab.render();

