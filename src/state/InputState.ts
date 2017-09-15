import IToken from "../token/IToken";

export default class InputState {
  protected _value : string;

  constructor(protected mask:string) {
  }

  public get value(): string {
    return this._value;
  }

  public onFocus():boolean {
    return true;
  }

  public onBlur():boolean {
    return true;
  }

  public onKeyDown(key:string):boolean {
    return true;
  }

  public onKeyPress(key:string):boolean {
    return true;
  }

  public onKeyUp(key:string):boolean {
    return true;
  }
}
