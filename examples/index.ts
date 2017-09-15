import Masketter from "../src/index";
import * as utils from "../src/utils";

function addInput(mask:string, placeholder:string):void {
  let input:HTMLInputElement = <HTMLInputElement> utils.create(null, "input", {
    type: "text",
    placeholder: placeholder
  });
  let mask1:Masketter = new Masketter(input, mask);
  document.body.appendChild(input);
  document.body.appendChild(utils.create(null, "span", { textContent: mask}));
  document.body.appendChild(utils.create(null, "br", null));
}

addInput("HH:mm:ss", "00:00:00");
addInput("H:mm:ss", "0:00:00");
addInput("hh:mm:ss A", "00:00:00 AM");
addInput("h:mm:ss A", "0:00:00 AM");
addInput("DD/MM/YYYY", "DD/MM/YYYY");
addInput("DD/MM/YY", "DD/MM/YY");
addInput("MM/DD/YY", "MM/DD/YY");
addInput("MM/DD/YYYY", "MM/DD/YYYY");
