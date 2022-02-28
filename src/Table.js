import Cell from "./Cell.js";
import {addToScore} from "./main.js";

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

    contains(value) {
        let contains = false;
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(this.array[l][c].value === value) contains = true;
            });
        });

        return contains;
    }

    canMove(l, c) {
        let currentCell = this.array[l][c];

        if(currentCell.isSame(l+1<this.size?this.array[l+1][c]:undefined)) return true;
        if(currentCell.isSame(l-1>=0?this.array[l-1][c]:undefined)) return true;
        if(currentCell.isSame(c+1<this.size?this.array[l][c+1]:undefined)) return true;
        if(currentCell.isSame(c-1>=0?this.array[l][c-1]:undefined)) return true;

        return false;
    }

    canMoveOne() {
        let oneCanMove = false;

        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(this.canMove(l, c)) {
                    console.log(`this can move : ${this.array[l][c].value} \t: [${l}, ${c}] ==> ${this.isEmpty(l, c)}`);
                    oneCanMove = true;
                }
            });
        });

        return oneCanMove;
    }

    isFull() {
        let oneEmpty = false;

        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                oneEmpty |= this.isEmpty(l, c);
            });
        });

        if(!oneEmpty) console.warn("tab is Full");

        return !oneEmpty;
    }

    addRandomCell() {
        let l = Math.floor(Math.random() * this.size);
        let c = Math.floor(Math.random() * this.size);

        if(this.isEmpty(l,c))
            this.array[l][c] = new Cell(Math.floor(Math.random()*10)>=7?4:2);
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

        let haveChange = false;

        if (!this.isOutSide(newL, newC)) {
            let focus = this.array[newL][newC];
            let current = this.array[l][c];

            if(this.isEmpty(newL, newC)) { /* move */
                focus.value = (current.value);
                current.setEmpty();
                haveChange = true;
                this.moveORFusion(newL, newC, x, y);
            } else { /* fusion */
                if(!focus.fused) {
                    if(focus.isSame(current)) {
                        let newValue = focus.fusion(current);
                        addToScore(newValue);
                        haveChange = true;
                    }
                }
            }
        }

        return haveChange;
    }

    move(l, c, direction) {
        let haveChange = false;
        switch (direction) {
            case 'LEFT':
                haveChange = this.moveORFusion(l, c, 0, -1);
                break;
            case 'UP':
                haveChange = this.moveORFusion(l, c, -1, 0);
                break;
            case 'DOWN':
                haveChange = this.moveORFusion(l, c, 1, 0);
                break;
            case 'RIGHT':
                haveChange = this.moveORFusion(l, c, 0, 1);
                break;
        }
        return haveChange;
    }


    moveLeft() {
        let haveChange = false;
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(!cell.isEmpty()) {
                    haveChange |= this.move(l,c, 'LEFT');
                }
            });
        });
        return haveChange;
    }

    moveUp() {
        let haveChange = false;
        this.array.forEach( (row, l) => {
            row.forEach( (cell, c) => {
                if(!cell.isEmpty()) {
                    haveChange |= this.move(l,c, 'UP');
                }
            });
        });
        return haveChange;
    }

    moveDown() {
        let haveChange = false;
        for (let l = this.size-1; l >= 0; l--) {
            this.array[l].forEach( (cell, c) => {
                if(!cell.isEmpty()) {
                    haveChange |= this.move(l,c, 'DOWN');
                }
            });
        }
        return haveChange;
    }

    moveRight() {
        let haveChange = false;

        this.array.forEach( (row, l) => {
            for (let c = this.size-1; c >= 0; c--){
                const cell = row[c];
                if(!cell.isEmpty()) {
                    haveChange |= this.move(l,c, 'RIGHT');
                }
            }
        });
        return haveChange;
    }
}