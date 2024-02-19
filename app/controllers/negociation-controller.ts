import { AllNegociations } from "../models/allNegociations.js";
import { Negociation } from "../models/negociation.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";

export class NegociationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private allNegociations = new AllNegociations();
  private negociationsView = new NegociationsView("#negociations-view");
  private messageView = new MessageView("#message-view");
  private readonly SATURDAY: number = 6;
  private readonly SUNDAY: number = 0;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negociationsView.update(this.allNegociations);
  }

  public add() {
    const negociation = this.createNegociation();
    if (!this.isBusinessDay(negociation.date)) {
      this.messageView.update("Apenas negociações em dias úteis são aceitas.");
    }
    this.allNegociations.add(negociation);
    this.clearForm();
    this.updateView();
  }

  private createNegociation(): Negociation {
    const regularExpression = /-/g;
    const date = new Date(this.inputDate.value.replace(regularExpression, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negociation(date, quantity, value);
  }

  private clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.messageView.update("Negociação adicionada com sucesso!");
    this.negociationsView.update(this.allNegociations);
  }

  private isBusinessDay(date: Date): boolean {
    return date.getDay() > this.SUNDAY && date.getDay() < this.SATURDAY;
  }
}
