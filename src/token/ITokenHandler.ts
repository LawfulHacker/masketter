export default interface ITokenHandler {
  isCompleted:boolean;
  value:string;
  handleInput(input:string):void;
}
