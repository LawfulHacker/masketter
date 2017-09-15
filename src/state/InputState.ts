export default class InputState {
  protected _value : string;
  protected _oldValue : string;

  constructor(protected mask : string) {
    this._value = "";
    this._oldValue = "";
  }

  public get value(): string {
    return this._value;
  }

  public onFocus():boolean {
    this._oldValue = this._value;
    return true;
  }

  public onBlur():boolean {
    this._value = this._oldValue;
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
