import { expect } from "chai";
import * as moment from "moment";

import HourTokenHandler from "../../src/token/HourTokenHandler";

describe("HourTokenHandler", () => {
  it("should complete with 2 as input using h format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("h", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("2");
  });

  it("should complete with 9 as input using h format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("h", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("9");
  });

  it("should accept 10 as input using h format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("h", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using h format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("h", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("12");
  });

  it("should accept 08 as input using h format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("h", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("8");
  });

  it("should convert 18 to 6 PM using h format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("h", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("6");

    expect(handler.moment.format("A")).to.be.equal("PM");
  });

  it("should complete with 2 as input using hh format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("hh", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("02");
  });

  it("should complete with 9 as input using hh format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("hh", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("09");
  });

  it("should accept 10 as input using hh format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("hh", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using hh format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("hh", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("12");
  });

  it("should accept 08 as input using hh format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("hh", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("08");
  });

  it("should convert 18 to 6 PM using hh format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("hh", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("06");

    expect(handler.moment.format("A")).to.be.equal("PM");
  });

  it("should not complete with 2 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");
  });

  it("should complete with 3 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("3");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("3");
  });

  it("should complete with 9 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("9");
  });

  it("should accept 10 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("0");
  });

  it("should accept 08 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("8");
  });

  it("should accept 18 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("18");
  });

  it("should accept 23 as input using H format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("H", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");

    handler.handleInput("3");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("23");
  });

  it("should not complete with 2 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");
  });

  it("should complete with 3 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("3");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("03");
  });

  it("should complete with 9 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("09");
  });

  it("should accept 10 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("00");
  });

  it("should accept 08 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("08");
  });

  it("should accept 18 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("18");
  });

  it("should accept 23 as input using HH format", () => {
    let handler:HourTokenHandler = new HourTokenHandler("HH", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");

    handler.handleInput("3");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("23");
  });
});
