import { Moment, utc } from "moment";

import IMomentTokenHandler from "./IMomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class HourTokenHandler implements IMomentTokenHandler {
  isCompleted: boolean;
  value: string;
  is24format: boolean;

  constructor(private format:string, public moment:Moment) {
    this.value = "";
    this.isCompleted = false;
    this.is24format = this.format[0] === "H";
  }

  handleInput(input: string): void {
    let hour:number = this.moment.hour();
    let n:number = Number(input);
    if (n === Number.NaN) {
      throw new InvalidInputError();
    }

    if (this.value === "") {
      this.moment.hour(n);
      if (n > (this.is24format ? 2 : 1)) {
        this.isCompleted = true;
      }
    } else {
      this.moment.hour(hour * 10 + n);
      this.isCompleted = true;
    }

    if (this.isCompleted) {
      this.value = this.moment.format(this.format);
    } else {
      this.value += input;
    }
  }
}
