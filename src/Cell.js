export default class Cell {
    value;
    fused;

    constructor(value) {
        this.value = value;
        this.fused = false;
    }

    set value(value) {
        this.value = value;
    }

    isEmpty() {
        return this.value===0;
    }

    setEmpty() {
        this.value = 0;
    }

    fusion(old) {
        this.value *= 2;
        this.fused = true;
        old.setEmpty();
    }

    render() {
        this.fused = false;
        return `<td class="cell c${this.value}">
                    <span>${this.value===0?'':this.value}</span>
                </td>`;
    }

}