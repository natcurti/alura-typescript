export class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: T): string {
    throw new Error("A classe filha precisa implementar o método!");
  }

  update(model: T): void {
    this.element.innerHTML = this.template(model);
  }
}
