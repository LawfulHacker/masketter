import { Moment } from "moment";
import * as moment from "moment";

import InvalidInputError from "../errors/InvalidInputError";

import TokenHandler from "../token/TokenHandler";
import YearTokenHandler from "../token/YearTokenHandler";
import MonthTokenHandler from "../token/MonthTokenHandler";
import DayTokenHandler from "../token/DayTokenHandler";
import HourTokenHandler from "../token/HourTokenHandler";
import MinuteTokenHandler from "../token/MinuteTokenHandler";
import SecondTokenHandler from "../token/SecondTokenHandler";
import AmPmTokenHandler from "../token/AmPmTokenHandler";
import SeparatorTokenHandler from "../token/SeparatorTokenHandler";

import InputState from "./InputState";

export default class MomentInputState extends InputState {
  protected _moment:Moment;
  private tokenHandlers:TokenHandler[];
  private tokenIndex:number;

  constructor(mask:string, value:string) {
    super(mask, value);
    this._moment = moment(value, mask);
    this.tokenHandlers = [];
    this.tokenIndex = 0;
    this.parseMask();
    this.refreshValue();
    console.log(this.tokenIndex);
  }

  public get moment(): Moment {
    return this._moment;
  }

  public onBlur():boolean {
    if (this._value !== moment(this._value, this.mask).format(this.mask)) {
      this._value = this._oldValue;
    }
    return true;
  }

  public onFocus():boolean {
    this._oldValue = this._value;
    return true;
  }

  public onKeyDown(key:string):boolean {
    let handler:TokenHandler = this.tokenHandlers[this.tokenIndex];

    if (key === "Backspace") {
      do {
        try {
          handler.handleBackspace();
          break;
        } catch (e) {
          handler = this.tokenHandlers[--this.tokenIndex];
          if (this.tokenIndex < 0) {
            this.tokenIndex = 0;
            break;
          }
        }
      } while (true);

      this.refreshValue();

      return true;
    }

    return false;
  }

  public onKeyPress(key:string):boolean {
    let handler:TokenHandler;

    if (/[0-9APM\\: ]/i.test(key)) {
      do {
        handler = this.tokenHandlers[this.tokenIndex];
        if (!handler.isCompleted) {
          handler.handleInput(key);
          break;
        }
      } while (handler.isCompleted && ++this.tokenIndex < this.tokenHandlers.length);

      if (this.tokenIndex >= this.tokenHandlers.length) {
        this.tokenIndex = this.tokenHandlers.length - 1;
      }
    }

    this.refreshValue();

    return true;
  }

  protected refreshValue():void {
    let inputValue:string = "";

    for (let h of this.tokenHandlers) {
      inputValue += h.value;
      if (!h.isCompleted) {
        break;
      }
    }

    this._value = inputValue;
  }

  protected parseMask():void {
    let exp:RegExp = /(YYYY|YY|MM?|DD?|HH?|hh?|mm|ss|A|.)/g;
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
          this.tokenHandlers.push(new AmPmTokenHandler(match[0], this._moment));
          break;
        default:
          this.tokenHandlers.push(new SeparatorTokenHandler(match[0]));
          break;
      }

      if (this._moment.isValid()) {
        this.tokenIndex++;
      }
    }
  }
}
