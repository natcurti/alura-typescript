import { View } from "./view.js";
export class NegotiationsView extends View {
    template(allNegotiations) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${allNegotiations
            .showNegotiations()
            .map((negotiation) => {
            return `
                        <tr>
                            <td>${this.formatDate(negotiation.date)}</td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.value}</td>
                        </tr>
                    `;
        })
            .join("")}
            </tbody>
        </table>
        `;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
