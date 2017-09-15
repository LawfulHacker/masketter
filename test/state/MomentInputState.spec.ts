import { expect } from "chai";

import MomentInputState from "../../src/state/MomentInputState";

describe("MomentInputState", () => {
  it("should handle H:mm:ss mask correctly", () => {
    let inputState:MomentInputState = new MomentInputState("H:mm:ss");

    inputState.onKeyPress("0");
    expect(inputState.value).to.be.equal("0");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("1:");

    inputState.onKeyPress("5");
    expect(inputState.value).to.be.equal("1:5");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("1:51:");

    inputState.onKeyPress("5");
    expect(inputState.value).to.be.equal("1:51:5");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("1:51:51");

    expect(inputState.moment.hour()).to.be.equal(1);
    expect(inputState.moment.minute()).to.be.equal(51);
    expect(inputState.moment.second()).to.be.equal(51);
  });

  it("should handle HH:mm:ss mask correctly", () => {
    let inputState:MomentInputState = new MomentInputState("HH:mm:ss");

    inputState.onKeyPress("0");
    expect(inputState.value).to.be.equal("0");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("01:");

    inputState.onKeyPress("5");
    expect(inputState.value).to.be.equal("01:5");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("01:51:");

    inputState.onKeyPress("5");
    expect(inputState.value).to.be.equal("01:51:5");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("01:51:51");

    expect(inputState.moment.hour()).to.be.equal(1);
    expect(inputState.moment.minute()).to.be.equal(51);
    expect(inputState.moment.second()).to.be.equal(51);
  });

  it("should handle h:mm:ss mask correctly", () => {
    let inputState:MomentInputState = new MomentInputState("h:mm:ss");

    inputState.onKeyPress("0");
    expect(inputState.value).to.be.equal("0");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("1:");

    inputState.onKeyPress("5");
    expect(inputState.value).to.be.equal("1:5");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("1:51:");

    inputState.onKeyPress("5");
    expect(inputState.value).to.be.equal("1:51:5");

    inputState.onKeyPress("1");
    expect(inputState.value).to.be.equal("1:51:51");

    expect(inputState.moment.hour()).to.be.equal(1);
    expect(inputState.moment.minute()).to.be.equal(51);
    expect(inputState.moment.second()).to.be.equal(51);
  });
});
