import Cell from "./Cell.js";

export default class Row {
    cells;

    constructor(size) {
        this.cells = [];
        for (let i = 0; i < size; i++) {
            this.cells.push(new Cell());
        }
    }

    render() {
        return `<tr>${this.cells.map((e) => {
            return e.render()
        }).join("\n")}</tr>`;
    }

}