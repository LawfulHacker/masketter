import { Moment } from "moment";

import ITokenHandler from "./ITokenHandler";

export default interface IMomentTokenHandler extends ITokenHandler {
  moment: Moment;
}
