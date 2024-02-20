import { Negotiation } from "./negotiation.js";

export class AllNegotiations {
  private allNegotiations: Array<Negotiation> = [];

  public add(negotiation: Negotiation) {
    this.allNegotiations.push(negotiation);
  }

  public showNegotiations(): ReadonlyArray<Negotiation> {
    return this.allNegotiations;
  }
}
