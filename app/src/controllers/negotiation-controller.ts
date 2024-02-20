import { domInjector } from "../decorators/dom-injector.js";
import { executionTime } from "../decorators/execution-time.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
import { AllNegotiations } from "../models/all-negotiations.js";
import { Negotiation } from "../models/negotiation.js";
import { NegotiationsService } from "../services/negotiations-services.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {
  @domInjector("#data")
  private inputDate: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantity: HTMLInputElement;
  @domInjector("#valor")
  private inputValue: HTMLInputElement;
  private allNegotiations = new AllNegotiations();
  private negotiationsView = new NegotiationsView("#negotiations-view");
  private messageView = new MessageView("#message-view");
  private service = new NegotiationsService();

  constructor() {
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

  public importData(): void {
    this.service.getNegotiationsToday().then((negotiationsToday) => {
      for (let negotiation of negotiationsToday) {
        this.allNegotiations.add(negotiation);
      }
      this.negotiationsView.update(this.allNegotiations);
    });
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
