import { AllNegociations } from "../models/allNegociations.js";
import { Negociation } from "../models/negociation.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private allNegociations = new AllNegociations();
  private negociationsView = new NegociationsView("#negociations-view");

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negociationsView.update();
  }

  add() {
    const negociation = this.createNegociation();
    this.allNegociations.add(negociation);
    this.clearForm();
    console.log(this.allNegociations.showNegociations());
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
