import { DaysOfWeek } from "../enums/days-of-week.js";
import { AllNegotiations } from "../models/allNegotiations.js";
import { Negotiation } from "../models/negotiation.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.allNegotiations = new AllNegotiations();
        this.negotiationsView = new NegotiationsView("#negotiations-view");
        this.messageView = new MessageView("#message-view");
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negotiationsView.update(this.allNegotiations);
    }
    add() {
        const negotiation = this.createNegotiation();
        if (!this.isBusinessDay(negotiation.date)) {
            this.messageView.update("Apenas negociações em dias úteis são aceitas.");
        }
        else {
            this.allNegotiations.add(negotiation);
            this.clearForm();
            this.updateView();
        }
    }
    createNegotiation() {
        const regularExpression = /-/g;
        const date = new Date(this.inputDate.value.replace(regularExpression, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.messageView.update("Negociação adicionada com sucesso!");
        this.negotiationsView.update(this.allNegotiations);
    }
    isBusinessDay(date) {
        return (date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY);
    }
}
