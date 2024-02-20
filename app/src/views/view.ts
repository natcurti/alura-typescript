import { executionTime } from "../decorators/executionTime.js";

export abstract class View<T> {
  protected element: HTMLElement;
  private escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw new Error("Verifique o seletor usado.");
    }
    if (escape) {
      this.escape = escape;
    }
  }

  protected abstract template(model: T): string;

  @executionTime(true)
  public update(model: T): void {
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.element.innerHTML = template;
  }
}
