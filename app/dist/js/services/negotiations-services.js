import { Negotiation } from "../models/negotiation.js";
export class NegotiationsService {
    getNegotiationsToday() {
        return fetch("http://localhost:8080/dados")
            .then((response) => response.json())
            .then((data) => {
            return data.map((item) => {
                return new Negotiation(new Date(), item.vezes, item.montante);
            });
        });
    }
}
