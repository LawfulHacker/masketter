import { expect } from "chai";
import * as moment from "moment";

import SecondTokenHandler from "../../src/token/SecondTokenHandler";

describe("SecondTokenHandler", () => {
  it("should not complete with 2 as input using s format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("s", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");
  });

  it("should complete with 9 as input using s format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("s", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("9");
  });

  it("should accept 10 as input using s format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("s", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using s format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("s", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("0");
  });

  it("should accept 08 as input using s format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("s", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("8");
  });

  it("should not complete with 2 as input using ss format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("ss", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");
  });

  it("should complete with 9 as input using ss format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("ss", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("09");
  });

  it("should accept 10 as input using ss format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("ss", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using ss format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("ss", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("00");
  });

  it("should accept 08 as input using ss format", () => {
    let handler:SecondTokenHandler = new SecondTokenHandler("ss", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("08");
  });
});
