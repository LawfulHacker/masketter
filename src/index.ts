import * as moment from "moment";

import * as utils from "./utils";

import ITokenHandler from "./token/ITokenHandler";
import YearTokenHandler from "./token/YearTokenHandler";
import MonthTokenHandler from "./token/MonthTokenHandler";
import DayTokenHandler from "./token/DayTokenHandler";
import HourTokenHandler from "./token/HourTokenHandler";
import MinuteTokenHandler from "./token/MinuteTokenHandler";
import SecondTokenHandler from "./token/SecondTokenHandler";
import SeparatorTokenHandler from "./token/SeparatorTokenHandler";
import InputState from "./state/InputState";
import MomentInputState from "./state/MomentInputState";

class MaskToken {
  constructor(public token:string, public handler:ITokenHandler) {
  }
}

class MaskTokenizer {
  constructor(private mask:string, tokens:MaskToken[]) {
  }
}

export default class Masketter {
  private data:string;
  private value:string;
  private inputState:InputState;
  private tokenHandlers:ITokenHandler[];
  private tokenIndex:number;

  constructor(private input:HTMLInputElement, private mask:string) {
    this.input.classList.add("masketter");
    this.data = "ABCDEFGHIJKL"[Math.floor(Math.random()*10)];
    this.inputState = new MomentInputState(this.mask);

    let keyDownEventListener:EventListenerObject = {
      handleEvent: (event:KeyboardEvent) => {
        console.log(event.type, this.data, event.key, event.code);
      }
    };

    let keyPressEventListener:EventListenerObject = {
      handleEvent: (event:KeyboardEvent) => {
        console.log(event.type, this.data, event.key, event.code);
        if (this.inputState.onKeyPress(event.key)) {
          event.preventDefault();
        }
        input.value = this.inputState.value;
      }
    };

    let keyUpEventListener:EventListenerObject = {
      handleEvent: (event:KeyboardEvent) => {
        console.log(event.type, this.data, event.key, event.code);
      }
    };

    let focusEventListener:EventListenerObject = {
      handleEvent: (event:FocusEvent) => {
        console.log(event.type, this.data);
      }
    };

    let blurEventListener:EventListenerObject = {
      handleEvent: (event:FocusEvent) => {
        console.log(event.type, this.data);
      }
    };

    let anyEventListener:EventListenerObject = {
      handleEvent: (event:Event) => {
        console.log(event.type, this.data);
      }
    };

    utils.on(input, "change", anyEventListener);

    utils.on(input, "keydown", keyDownEventListener);
    utils.on(input, "keypress", keyPressEventListener);
    utils.on(input, "keyup", keyUpEventListener);

    utils.on(input, "focus", focusEventListener);
    utils.on(input, "blur", blurEventListener);
  }

  protected get caretPosition(): number {
    if (this.input.selectionStart !== this.input.selectionEnd) {
      return 0;
    }
    return this.input.selectionStart;
  }

  protected set caretPosition(position: number) {
    this.input.selectionStart = position;
    this.input.selectionEnd = position;
  }
}
