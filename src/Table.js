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

    addCell(l, c, value) {
        this.array[l][c] = new Cell(value);
    }

    addRandomCell() {
        let l = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        if(this.isEmpty(l,c))
            this.array[l][c] = new Cell(2);
        else this.addRandomCell();
    }

    isEmpty(l, c) {
        if(l >= this.size || c >= this.size || l < 0 || c < 0) return false;
        return this.array[l][c].value === 0;
    }

    switchCell(newL, newC, l, c, cell) {
        console.log(`looking for : ${newL}-${newC}`);
        if ((newL !== l || newC !== c) && this.isEmpty(newL, newC)) {
            this.array[newL][newC] = cell;
            this.array[l][c] = new Cell(0);
            console.log(`move ${cell.value} to : ${newL}-${newC}`);
        } else {
            console.log(`cant move ${cell.value} : ${newL}-${newC}`);
        }
    }

    moveLeft() {
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(cell.value !== 0) {
                    console.log(`check ${cell.value} : ${l}-${c}`);
                    let newL = l;
                    let newC = 0;

                    while (newC<this.size && !this.isEmpty(newL, newC)) newC++; // tant que c'est pas vide je check la case d'à côté

                    this.switchCell(newL, newC, l, c, cell);
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

                    while (newL<this.size && !this.isEmpty(newL, newC)) newL++;

                    this.switchCell(newL, newC, l, c, cell);
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

                    this.switchCell(newL, newC, l, c, cell);
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

                    this.switchCell(newL, newC, l, c, cell);
                }
            }
        }
    }
}