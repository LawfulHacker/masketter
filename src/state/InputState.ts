export default class InputState {
  protected _value : string;
  protected _oldValue : string;

  constructor(protected mask : string, value:string) {
    this._value = value;
    this._oldValue = value;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value:string) {
    this._value = value;
    this._oldValue = value;
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
