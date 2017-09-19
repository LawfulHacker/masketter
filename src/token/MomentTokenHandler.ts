import { Moment } from "moment";
import { utc }  from "moment";

import InvalidInputError from "../errors/InvalidInputError";
import TokenHandler from "./TokenHandler";

export default class MomentTokenHandler extends TokenHandler {
  constructor(protected format:string, public moment:Moment) {
    super();
    if (moment.isValid()) {
      this.value = this.moment.format(this.format);
      this.isCompleted = true;
    } else {
      this.moment = utc(0);
    }
  }

  handleBackspace(): void {
    this.isCompleted = false;
    if (this.value === "") {
      throw new InvalidInputError();
    }
    this.value = this.value.substr(0, this.value.length - 1);
  }
}
