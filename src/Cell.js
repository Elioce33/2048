export default class Cell {
    value;

    constructor(value) {
        this.value = value===0?'':value;
    }

    set value(value) {
        this.value = value;
    }

    render() {
        return `<td class="cell_${this.value}">${this.value}</td>`;
    }

}