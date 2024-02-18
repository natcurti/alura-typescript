import { Negociation } from "../models/negociation.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
  }

  add() {
    const negociation = this.createNegociation();
    this.clearForm();
    console.log(negociation);
  }

  createNegociation(): Negociation {
    const regularExpression = /-/g;
    const date = new Date(this.inputDate.value.replace(regularExpression, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negociation(date, quantity, value);
  }

  clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }
}
