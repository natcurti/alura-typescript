import { AllNegotiations } from "../models/allNegotiations.js";
import { Negotiation } from "../models/negotiation.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private allNegotiations = new AllNegotiations();
  private negotiationsView = new NegotiationsView("#negotiations-view");
  private messageView = new MessageView("#message-view");
  private readonly SATURDAY: number = 6;
  private readonly SUNDAY: number = 0;

  constructor() {
    this.inputDate = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantidade");
    this.inputValue = document.querySelector("#valor");
    this.negotiationsView.update(this.allNegotiations);
  }

  public add() {
    const negotiation = this.createNegotiation();
    if (!this.isBusinessDay(negotiation.date)) {
      this.messageView.update("Apenas negociações em dias úteis são aceitas.");
    } else {
      this.allNegotiations.add(negotiation);
      this.clearForm();
      this.updateView();
    }
  }

  private createNegotiation(): Negotiation {
    const regularExpression = /-/g;
    const date = new Date(this.inputDate.value.replace(regularExpression, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);
    return new Negotiation(date, quantity, value);
  }

  private clearForm(): void {
    this.inputDate.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputDate.focus();
  }

  private updateView(): void {
    this.messageView.update("Negociação adicionada com sucesso!");
    this.negotiationsView.update(this.allNegotiations);
  }

  private isBusinessDay(date: Date): boolean {
    return date.getDay() > this.SUNDAY && date.getDay() < this.SATURDAY;
  }
}
