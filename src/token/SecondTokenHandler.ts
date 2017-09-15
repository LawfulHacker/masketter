import { Moment, utc } from "moment";

import IMomentTokenHandler from "./IMomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class SecondTokenHandler implements IMomentTokenHandler {
  isCompleted: boolean;
  value: string;

  constructor(private format:string, public moment:Moment) {
    this.value = "";
    this.isCompleted = false;
  }

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
