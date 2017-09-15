import { Moment, utc } from "moment";

import ITokenHandler from "./ITokenHandler";
import InvalidInputError from "../errors/InvalidInputError";

export default class SeparatorTokenHandler implements ITokenHandler {
  isCompleted: boolean;
  value: string;

  constructor(private format:string) {
    this.value = format;
    this.isCompleted = true;
  }

  handleInput(input: string): void {
    throw new InvalidInputError();
  }
}
