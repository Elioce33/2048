export default class Cell {
    value;

    constructor(value) {
        this.value = value===0?'':value;
    }

    set value(value) {
        this.value = value;
    }

    render() {
        return `<td class="cell c${this.value}">
                    <span>${this.value}</span>
                </td>`;
    }

}