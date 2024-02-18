export class AllNegociations {
    constructor() {
        this.allNegociations = [];
    }
    add(negociation) {
        this.allNegociations.push(negociation);
    }
    showNegociations() {
        return this.allNegociations;
    }
}
