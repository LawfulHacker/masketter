import { Moment, utc } from "moment";
import * as moment from "moment";

import IMomentTokenHandler from "./IMomentTokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class YearTokenHandler implements IMomentTokenHandler {
  isCompleted: boolean;
  value: string;

  constructor(private format:string, public moment:Moment) {
    this.value = "";
    this.isCompleted = false;
  }

  handleInput(input: string): void {
    let n:number = Number(input);
    if (n === Number.NaN) {
      throw new InvalidInputError();
    }

    this.value += input;
    this.isCompleted = this.value.length === this.format.length;

    if (this.isCompleted) {
      this.moment.year(moment(this.value, this.format).year());
      this.value = this.moment.format(this.format);
    }
  }
}
