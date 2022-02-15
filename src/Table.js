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

    isOutSide(l, c) {
        if(l < 0) return true;
        if(l >= this.size) return true;

        if(c < 0) return true;
        if(c >= this.size) return true;

        return false;
    }

    isEmpty(l, c) {
        return this.array[l][c].isEmpty();
    }

    moveORFusion(l, c, x, y) {
        let newL = l + x;
        let newC = c + y;

        if (!this.isOutSide(newL, newC)) {
            let focus = this.array[newL][newC];
            let current = this.array[l][c];

            if(this.isEmpty(newL, newC)) { /* move */
                focus.value = (current.value);
                current.setEmpty();

                this.moveORFusion(newL, newC, x, y);
            } else { /* fusion */
                if(!focus.fused) {
                    if(focus.value === current.value) {
                        focus.fusion(current);
                    }
                }
            }
        }
    }

    move(l, c, direction) {
        switch (direction) {
            case 'LEFT':
                this.moveORFusion(l, c, 0, -1);
                break;
            case 'UP':
                this.moveORFusion(l, c, -1, 0);
                break;
            case 'DOWN':
                this.moveORFusion(l, c, 1, 0);
                break;
            case 'RIGHT':
                this.moveORFusion(l, c, 0, 1);
                break;

        }
    }


    moveLeft() {
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(!cell.isEmpty()) {
                    this.move(l,c, 'LEFT');
                }
            });
        });
    }

    moveUp() {
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(!cell.isEmpty()) {
                    this.move(l,c, 'UP');
                }
            });
        });
    }

    moveDown() {
        for (let l = this.size-1; l >= 0; l--) {
            this.array[l].forEach( (cell, c) => {
                if(!cell.isEmpty()) {
                    this.move(l,c, 'DOWN');
                }
            });
        }
    }

    moveRight() {
        this.array.forEach( (row, l) => {
            for (let c = this.size-1; c >= 0; c--){
                const cell = row[c];
                if(!cell.isEmpty()) {
                    this.move(l,c, 'RIGHT');
                }
            }
        });
    }
}