import { NegotiationsToday } from "../interfaces/negotiations-today.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationsService {
  public getNegotiationsToday(): Promise<Negotiation[]> {
    return fetch("http://localhost:8080/dados")
      .then((response) => response.json())
      .then((data: NegotiationsToday[]) => {
        return data.map((item) => {
          return new Negotiation(new Date(), item.vezes, item.montante);
        });
      });
  }
}
