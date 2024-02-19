export class MessageView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: string): string {
    return `
            <p class="alert alert-info">${model}</p>
        `;
  }

  update(model: string): void {
    this.element.innerHTML = this.template(model);
  }
}
