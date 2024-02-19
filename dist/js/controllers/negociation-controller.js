import { AllNegociations } from "../models/allNegociations.js";
import { Negociation } from "../models/negociation.js";
import { MessageView } from "../views/message-view.js";
import { NegociationsView } from "../views/negociations-view.js";
export class NegociationController {
    constructor() {
        this.allNegociations = new AllNegociations();
        this.negociationsView = new NegociationsView("#negociations-view");
        this.messageView = new MessageView("#message-view");
        this.SATURDAY = 6;
        this.SUNDAY = 0;
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negociationsView.update(this.allNegociations);
    }
    add() {
        const negociation = this.createNegociation();
        if (!this.isBusinessDay(negociation.date)) {
            this.messageView.update("Apenas negociações em dias úteis são aceitas.");
        }
        this.allNegociations.add(negociation);
        this.clearForm();
        this.updateView();
    }
    createNegociation() {
        const regularExpression = /-/g;
        const date = new Date(this.inputDate.value.replace(regularExpression, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.messageView.update("Negociação adicionada com sucesso!");
        this.negociationsView.update(this.allNegociations);
    }
    isBusinessDay(date) {
        return date.getDay() > this.SUNDAY && date.getDay() < this.SATURDAY;
    }
}
