export class AllNegotiations {
    constructor() {
        this.allNegotiations = [];
    }
    add(negotiation) {
        this.allNegotiations.push(negotiation);
    }
    showNegotiations() {
        return this.allNegotiations;
    }
}
