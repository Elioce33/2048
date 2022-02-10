export default class Table {
    array;

    constructor(array) {
        this.array = array;
    }

    render() {
        return this.array.map( (line) => {
            return `<tr>${line.map((cell) => {
                return cell.render();
            }).join('\n')}</tr>`
        }).join('\n\n');
    }
}