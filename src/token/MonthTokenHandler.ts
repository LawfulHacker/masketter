import { Moment, utc } from "moment";

import IMomentTokenHandler from "./IMomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class MonthTokenHandler implements IMomentTokenHandler {
  isCompleted: boolean;
  value: string;

  constructor(private format:string, public moment:Moment) {
    this.value = "";
    this.isCompleted = false;
  }

  handleInput(input: string): void {
    let month:number = this.moment.month() + 1;
    let n:number = Number(input);
    if (n === Number.NaN) {
      throw new InvalidInputError();
    }

    if (this.value === "") {
      this.moment.month(n - 1);
      if (n > 1) {
        this.isCompleted = true;
      }
    } else {
      this.moment.month(month * 10 + n - 1);
      this.isCompleted = true;
    }

    if (this.isCompleted) {
      this.value = this.moment.format(this.format);
    } else {
      this.value += input;
    }
  }
}
