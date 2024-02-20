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
    convertToText() {
        return JSON.stringify(this.allNegotiations, null, 2);
    }
    isEqual(negotiations) {
        return (JSON.stringify(this.allNegotiations) ===
            JSON.stringify(negotiations.showNegotiations()));
    }
}
//# sourceMappingURL=all-negotiations.js.map