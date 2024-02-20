import { Model } from "../interfaces/model.js";
import { Negotiation } from "./negotiation.js";

export class AllNegotiations implements Model<AllNegotiations> {
  private allNegotiations: Array<Negotiation> = [];

  public add(negotiation: Negotiation) {
    this.allNegotiations.push(negotiation);
  }

  public showNegotiations(): ReadonlyArray<Negotiation> {
    return this.allNegotiations;
  }

  public convertToText(): string {
    return JSON.stringify(this.allNegotiations, null, 2);
  }

  public isEqual(negotiations: AllNegotiations): boolean {
    return (
      JSON.stringify(this.allNegotiations) ===
      JSON.stringify(negotiations.showNegotiations())
    );
  }
}
