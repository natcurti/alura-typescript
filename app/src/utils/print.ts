import { Print } from "./print-interface.js";

export function print(...objects: Array<Print>) {
  for (let object of objects) {
    console.log(object.convertToText());
  }
}
