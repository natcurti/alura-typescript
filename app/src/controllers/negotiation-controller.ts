import { executionTime } from "../decorators/executionTime.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
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

  constructor() {
    this.inputDate = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantity = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this.inputValue = document.querySelector("#valor") as HTMLInputElement;
    this.negotiationsView.update(this.allNegotiations);
  }

  @executionTime()
  public add() {
    const negotiation = Negotiation.createNegotiation(
      this.inputDate.value,
      this.inputQuantity.value,
      this.inputValue.value
    );
    if (!this.isBusinessDay(negotiation.date)) {
      this.messageView.update("Apenas negociações em dias úteis são aceitas.");
    } else {
      this.allNegotiations.add(negotiation);
      this.clearForm();
      this.updateView();
    }
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
    return (
      date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY
    );
  }
}
