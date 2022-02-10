export default class Cell {
    value;

    constructor(value) {
        this.value = value;
    }

    set value(value) {
        this.value = value;
    }

    render() {
        return `<td class="cell c${this.value}">
                    <span>${this.value===0?'':this.value}</span>
                </td>`;
    }

}