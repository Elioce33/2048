import Row from "./Row.js";

export default class Table {
    rows;

    constructor(size) {
        this.rows = [];
        for (let i = 0; i < size; i++) {
            this.rows.push(new Row(size));
        }

    }

    render() {
        return `${this.rows.map((e) => {
            return e.render()
        }).join("\n")}`;
    }
}