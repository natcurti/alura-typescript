import { Print } from "../utils/print-interface.js";
import { Comparable } from "./comparable.js";

export interface Model<T> extends Print, Comparable<T> {}
