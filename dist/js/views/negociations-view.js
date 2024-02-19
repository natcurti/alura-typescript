import { View } from "./view.js";
export class NegociationsView extends View {
    template(allNegociations) {
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
                ${allNegociations
            .showNegociations()
            .map((negociation) => {
            return `
                        <tr>
                            <td>${this.formatDate(negociation.date)}</td>
                            <td>${negociation.quantity}</td>
                            <td>${negociation.value}</td>
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
