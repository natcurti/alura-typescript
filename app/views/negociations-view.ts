import { AllNegociations } from "../models/allNegociations.js";

export class NegociationsView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(allNegociations: AllNegociations): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${allNegociations
                  .showNegociations()
                  .map((negociation) => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(
                              negociation.date
                            )}</td>
                            <td>${negociation.quantity}</td>
                            <td>${negociation.value}</td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
        `;
  }

  update(allNegociations: AllNegociations): void {
    this.element.innerHTML = this.template(allNegociations);
  }
}
