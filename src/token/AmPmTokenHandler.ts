import { Moment, utc } from "moment";

import MomentTokenHandler from "./MomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class AmPmTokenHandler extends MomentTokenHandler {
  handleInput(input: string): void {
    if (input.toUpperCase() === "A" || input.toUpperCase() === "P") {
      this.isCompleted = true;
      this.value = input.toUpperCase() + "M";
    }
  }
}
