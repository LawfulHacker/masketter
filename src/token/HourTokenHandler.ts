import { Moment, utc } from "moment";

import MomentTokenHandler from "./MomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class HourTokenHandler extends MomentTokenHandler {
  is24format: boolean;

  constructor(format:string, moment:Moment) {
    super(format, moment);
    this.is24format = this.format[0] === "H";
  }

  handleInput(input: string): void {
    let hour:number = this.value === "" ? 0 : Number(this.value);
    let n:number = Number(input);

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
