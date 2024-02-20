import { executionTime } from "../decorators/executionTime.js";
import { inspect } from "../decorators/inspect.js";

export abstract class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw new Error("Verifique o seletor usado.");
    }
  }

  protected abstract template(model: T): string;

  // @inspect
  // @executionTime(true)
  public update(model: T): void {
    let template = this.template(model);
    this.element.innerHTML = template;
  }
}
