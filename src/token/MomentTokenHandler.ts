import { Moment } from "moment";

import InvalidInputError from "../errors/InvalidInputError";
import TokenHandler from "./TokenHandler";

export default class MomentTokenHandler extends TokenHandler {
  constructor(protected format:string, public moment:Moment) {
    super();
  }

  handleBackspace(): void {
    this.isCompleted = false;
    if (this.value === "") {
      throw new InvalidInputError();
    }
    this.value = this.value.substr(0, this.value.length - 1);
  }
}
