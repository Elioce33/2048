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

valuesTab[Math.floor(Math.random() * valuesTab.length)][Math.floor(Math.random() * valuesTab.length)] = new Cell(2);

const tab = new Table(valuesTab);
tab_2048.innerHTML = tab.render();

