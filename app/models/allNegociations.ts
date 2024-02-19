import { Negociation } from "./negociation.js";

export class AllNegociations {
  private allNegociations: Array<Negociation> = [];

  public add(negociation: Negociation) {
    this.allNegociations.push(negociation);
  }

  public showNegociations(): ReadonlyArray<Negociation> {
    return this.allNegociations;
  }
}
