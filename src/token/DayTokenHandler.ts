import { Moment, utc } from "moment";

import MomentTokenHandler from "./MomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class DayTokenHandler extends MomentTokenHandler {
  handleInput(input: string): void {
    let day:number = this.value === "" ? 0 : Number(this.value);
    let n:number = Number(input);
    if (n === Number.NaN) {
      throw new InvalidInputError();
    }

    if (day === 0) {
      this.moment.date(n);
      if (n > 3) {
        this.isCompleted = true;
      }
    } else {
      this.moment.date(day * 10 + n);
      this.isCompleted = true;
    }

    if (this.isCompleted) {
      this.value = this.moment.format(this.format);
    } else {
      this.value += input;
    }
  }
}
