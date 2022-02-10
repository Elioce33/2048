export default class Cell {
    value;

    constructor(value) {
        this.value = value?value:"";
    }

    set value(value) {
        this.value = value;
    }

    render() {
        return `<td class="cell${this.value}">${this.value}</td>`;
    }

}