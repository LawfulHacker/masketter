import * as moment from "moment";

import * as utils from "./utils";

import YearTokenHandler from "./token/YearTokenHandler";
import MonthTokenHandler from "./token/MonthTokenHandler";
import DayTokenHandler from "./token/DayTokenHandler";
import HourTokenHandler from "./token/HourTokenHandler";
import MinuteTokenHandler from "./token/MinuteTokenHandler";
import SecondTokenHandler from "./token/SecondTokenHandler";
import SeparatorTokenHandler from "./token/SeparatorTokenHandler";
import InputState from "./state/InputState";
import MomentInputState from "./state/MomentInputState";

export default class Masketter {
  private inputState:InputState;

  constructor(private input:HTMLInputElement, private mask:string) {
    this.input.classList.add("masketter");
    this.inputState = new MomentInputState(this.mask, input.value);

    let keyDownEventListener:EventListenerObject = {
      handleEvent: (event:KeyboardEvent) => {
        if (this.inputState.onKeyDown(event.key)) {
          input.value = this.inputState.value;
          event.preventDefault();
        }
      }
    };

    let keyPressEventListener:EventListenerObject = {
      handleEvent: (event:KeyboardEvent) => {
        if (this.inputState.onKeyPress(event.key)) {
          input.value = this.inputState.value;
          event.preventDefault();
        }
      }
    };

    let keyUpEventListener:EventListenerObject = {
      handleEvent: (event:KeyboardEvent) => {
        if (this.inputState.onKeyUp(event.key)) {
          input.value = this.inputState.value;
          event.preventDefault();
        }
      }
    };

    let focusEventListener:EventListenerObject = {
      handleEvent: (event:FocusEvent) => {
        if (this.inputState.onFocus()) {
          input.value = this.inputState.value;
          event.preventDefault();
        }
      }
    };

    let blurEventListener:EventListenerObject = {
      handleEvent: (event:FocusEvent) => {
        if (this.inputState.onBlur()) {
          input.value = this.inputState.value;
          event.preventDefault();
        }
      }
    };

    utils.on(input, "keydown", keyDownEventListener);
    utils.on(input, "keypress", keyPressEventListener);
    utils.on(input, "keyup", keyUpEventListener);

    utils.on(input, "focus", focusEventListener);
    utils.on(input, "blur", blurEventListener);
  }

  public get value(): string {
    return this.inputState.value;
  }
  public set value(value : string) {
    this.inputState.value = value;
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
