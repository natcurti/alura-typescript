var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { executionTime } from "../decorators/execution-time.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
import { AllNegotiations } from "../models/all-negotiations.js";
import { Negotiation } from "../models/negotiation.js";
import { NegotiationsService } from "../services/negotiations-services.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.allNegotiations = new AllNegotiations();
        this.negotiationsView = new NegotiationsView("#negotiations-view");
        this.messageView = new MessageView("#message-view");
        this.service = new NegotiationsService();
        this.negotiationsView.update(this.allNegotiations);
    }
    add() {
        const negotiation = Negotiation.createNegotiation(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        if (!this.isBusinessDay(negotiation.date)) {
            this.messageView.update("Apenas negociações em dias úteis são aceitas.");
        }
        else {
            this.allNegotiations.add(negotiation);
            this.clearForm();
            this.updateView();
        }
    }
    importData() {
        this.service.getNegotiationsToday().then((negotiationsToday) => {
            for (let negotiation of negotiationsToday) {
                this.allNegotiations.add(negotiation);
            }
            this.negotiationsView.update(this.allNegotiations);
        });
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
__decorate([
    domInjector("#data")
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector("#quantidade")
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#valor")
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    executionTime()
], NegotiationController.prototype, "add", null);
