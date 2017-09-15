import { Moment } from "moment";
import * as moment from "moment";

import ITokenHandler from "../token/ITokenHandler";
import YearTokenHandler from "../token/YearTokenHandler";
import MonthTokenHandler from "../token/MonthTokenHandler";
import DayTokenHandler from "../token/DayTokenHandler";
import HourTokenHandler from "../token/HourTokenHandler";
import MinuteTokenHandler from "../token/MinuteTokenHandler";
import SecondTokenHandler from "../token/SecondTokenHandler";
import SeparatorTokenHandler from "../token/SeparatorTokenHandler";

import InputState from "./InputState";

export default class MomentInputState extends InputState {
  protected _moment:Moment;
  private tokenHandlers:ITokenHandler[];
  private tokenIndex:number;

  constructor(mask:string) {
    super(mask);
    this._moment = moment();
    this.tokenHandlers = [];
    this.tokenIndex = 0;
    this.parseMask();
  }

  public get moment(): Moment {
    return this._moment;
  }

  public onKeyPress(key:string):boolean {
    let handler:ITokenHandler = this.tokenHandlers[this.tokenIndex];

    if (/[0-9APM\\: ]/i.test(key)) {
      handler.handleInput(key);
      while (handler.isCompleted && ++this.tokenIndex < this.tokenHandlers.length) {
        handler = this.tokenHandlers[this.tokenIndex];
      }
    }

    let inputValue:string = "";

    for (let h of this.tokenHandlers) {
      inputValue += h.value;
      if (!h.isCompleted) {
        break;
      }
    }
    this._value = inputValue;
    return true;
  }

  protected parseMask():void {
    let exp:RegExp = /(YY|YYYY|MM?|DD?|HH?|hh?|mm|ss|A|.)/g;
    let match:RegExpExecArray;

    while (true) {
      match = exp.exec(this.mask);
      if (!match) {
        break;
      }

      switch (match[0]) {
        case "YY":
        case "YYYY":
          this.tokenHandlers.push(new YearTokenHandler(match[0], this._moment));
          break;
        case "M":
        case "MM":
          this.tokenHandlers.push(new MonthTokenHandler(match[0], this._moment));
          break;
        case "D":
        case "DD":
          this.tokenHandlers.push(new DayTokenHandler(match[0], this._moment));
          break;
        case "h":
        case "hh":
        case "H":
        case "HH":
          this.tokenHandlers.push(new HourTokenHandler(match[0], this._moment));
          break;
        case "m":
        case "mm":
          this.tokenHandlers.push(new MinuteTokenHandler(match[0], this._moment));
          break;
        case "s":
        case "ss":
          this.tokenHandlers.push(new SecondTokenHandler(match[0], this._moment));
          break;
        case "a":
        case "A":
          this.tokenHandlers.push(new SeparatorTokenHandler(match[0]));
          break;
        default:
          this.tokenHandlers.push(new SeparatorTokenHandler(match[0]));
          break;
      }
    }
  }
}