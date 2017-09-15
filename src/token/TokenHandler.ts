export default class TokenHandler {
  public isCompleted:boolean;
  public value:string;

  constructor() {
    this.value = "";
    this.isCompleted = false;
  }

  handleBackspace():void {
    // implemented by child classes
  }
  handleInput(input:string):void {
    // implemented by child classes
  }
}
