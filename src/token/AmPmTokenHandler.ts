import { Moment, utc } from "moment";

import TokenHandler from "./TokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class AmPmTokenHandler extends TokenHandler {
  handleInput(input: string): void {
    if (input.toUpperCase() === "A" || input.toUpperCase() === "P") {
      this.isCompleted = true;
      this.value = input.toUpperCase() + "M";
    }
  }
}
