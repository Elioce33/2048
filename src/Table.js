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

    moveLeft() {
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(cell.value !== 0) {
                    // console.log(`${cell.value} : ${l}-${c}`);
                    let newL = l;
                    let newC = 0;

                    while (!this.isEmpty(newL, newC) && newC<this.size) newC++;

                    this.array[newL][newC] = cell;
                    this.array[l][c] = new Cell(0);

                    // console.log(`move to : ${newL}-${newC}`);
                }
            });
        });
    }

    moveUp() {
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(cell.value !== 0) {
                    // console.log(`${cell.value} : ${l}-${c}`);
                    let newL = 0;
                    let newC = c;

                    while (!this.isEmpty(newL, newC) && newL<this.size) newL++;

                    this.array[newL][newC] = cell;
                    this.array[l][c] = new Cell(0);

                    // console.log(`move to : ${newL}-${newC}`);
                }
            });
        });
    }

    moveDown() {
        for (let l = this.size-1; l >= 0; l--) {
            for (let c = 0; c < this.size; c++) {
                let cell = this.array[l][c];

                if(cell.value !== 0) {
                    // console.log(`${cell.value} : ${l}-${c}`);
                    let newL = this.size-1;
                    let newC = c;

                    while (!this.isEmpty(newL, newC) && newL>=0) newL--;

                    this.array[newL][newC] = cell;
                    this.array[l][c] = new Cell(0);

                    // console.log(`move to : ${newL}-${newC}`);
                }
            }
        }
    }

    moveRight() {
        for (let l = 0; l < this.size; l++) {
            for (let c = this.size-1; c >= 0; c--) {
                let cell = this.array[l][c];

                if(cell.value !== 0) {
                    // console.log(`${cell.value} : ${l}-${c}`);
                    let newL = l;
                    let newC = this.size-1;

                    while (!this.isEmpty(newL, newC) && newC>=0) newC--;

                    this.array[newL][newC] = cell;
                    this.array[l][c] = new Cell(0);

                    // console.log(`move to : ${newL}-${newC}`);
                }
            }
        }
    }
}