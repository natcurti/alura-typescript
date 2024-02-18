import { Negociation } from "./negociation.js";

export class AllNegociations {
  private allNegociations: Array<Negociation> = [];

  add(negociation: Negociation) {
    this.allNegociations.push(negociation);
  }

  showNegociations(): ReadonlyArray<Negociation> {
    return this.allNegociations;
  }
}
