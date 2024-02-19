export class MessageView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
