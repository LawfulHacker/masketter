import { Moment, utc } from "moment";

import MomentTokenHandler from "./MomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class SecondTokenHandler extends MomentTokenHandler {
  handleInput(input: string): void {
    let second:number = this.moment.second();
    let n:number = Number(input);
    if (n === Number.NaN) {
      throw new InvalidInputError();
    }

    if (this.value === "") {
      this.moment.second(n);
      if (n > 5) {
        this.isCompleted = true;
      }
    } else {
      this.moment.second(second * 10 + n);
      this.isCompleted = true;
    }

    if (this.isCompleted) {
      this.value = this.moment.format(this.format);
    } else {
      this.value += input;
    }
  }
}
