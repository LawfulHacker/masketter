import { Moment, utc } from "moment";

import TokenHandler from "./TokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class SeparatorTokenHandler extends TokenHandler {
  constructor(format:string) {
    super();
    this.isCompleted = true;
    this.value = format;
  }

  handleBackspace(): void {
    throw new InvalidInputError();
  }

  handleInput(input: string): void {
    throw new InvalidInputError();
  }
}
