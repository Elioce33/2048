import Table from "./Table.js";

const tab_2048 = document.querySelector(".tab_2048");

const tab = new Table(4);

console.log(tab.render());
tab_2048.innerHTML = tab.render();

