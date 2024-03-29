import { Model } from "../interfaces/model.js";

export class Negotiation implements Model<Negotiation> {
  constructor(
    private _date: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  get date(): Date {
    const date = new Date(this._date.getTime());
    return date;
  }

  get volume() {
    return this.quantity * this.value;
  }

  public static createNegotiation(
    dateString: string,
    quantityString: string,
    valueString: string
  ): Negotiation {
    const regularExpression = /-/g;
    const date = new Date(dateString.replace(regularExpression, ","));
    const quantity = parseInt(quantityString);
    const value = parseFloat(valueString);
    return new Negotiation(date, quantity, value);
  }

  public convertToText(): string {
    return `
      Data: ${this.date},
      Quantidade: ${this.quantity},
      Valor: ${this.value}
    `;
  }

  public isEqual(negotiation: Negotiation): boolean {
    return (
      this.date.getDate() === negotiation.date.getDate() &&
      this.date.getMonth() === negotiation.date.getMonth() &&
      this.date.getFullYear() === negotiation.date.getFullYear()
    );
  }
}
