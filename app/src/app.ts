import { NegotiationController } from "./controllers/negotiation-controller.js";

const controller = new NegotiationController();

const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.add();
  });
} else {
  throw new Error("Seletor inválido, verifique se o form existe.");
}

const buttonImport = document.querySelector("#botao-importa");
if (buttonImport) {
  buttonImport.addEventListener("click", () => {
    controller.importData();
  });
} else {
  throw new Error("Botão não foi encontrado. ");
}
