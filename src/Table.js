import Cell from "./Cell.js";

export default class Table {
    array;
    size;

    constructor(array) {
        this.array = array;
        this.size = array.length;
    }

    render() {
        return this.array.map( (line) => {
            return `<tr>${line.map((cell) => {
                return cell.render();
            }).join('\n')}</tr>`
        }).join('\n\n');
    }

    addRandomCell() {
        let l = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        if(this.isEmpty(l,c))
            this.array[l][c] = new Cell(2);
        else this.addRandomCell();
    }

    isEmpty(l, c) {
        return this.array[l][c].value === 0;
    }

}