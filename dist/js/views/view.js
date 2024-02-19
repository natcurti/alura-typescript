export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        throw new Error("A classe filha precisa implementar o método!");
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
