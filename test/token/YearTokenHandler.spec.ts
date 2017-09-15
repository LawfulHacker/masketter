import { expect } from "chai";
import * as moment from "moment";

import YearTokenHandler from "../../src/token/YearTokenHandler";

describe("YearTokenHandler", () => {
  it("should not complete with 2 as input using YY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YY", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");
  });

  it("should not complete with 9 as input using YY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YY", moment.utc(0));
    handler.handleInput("9");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("9");
  });

  it("should accept 10 as input using YY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YY", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("10");
  });

  it("should accept 00 as input using YY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YY", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("00");
  });

  it("should accept 08 as input using YY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YY", moment.utc(0));
    handler.handleInput("0");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("0");

    handler.handleInput("8");
    expect(handler.isCompleted).to.be.equal(true);
    expect(handler.value).to.be.equal("08");
  });

  it("should not complete with 2 as input using YYYY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YYYY", moment.utc(0));
    handler.handleInput("2");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("2");
  });

  it("should not complete with 17 as input using YYYY format", () => {
    let handler:YearTokenHandler = new YearTokenHandler("YYYY", moment.utc(0));
    handler.handleInput("1");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("1");

    handler.handleInput("7");
    expect(handler.isCompleted).to.be.equal(false);
    expect(handler.value).to.be.equal("17");
  });
});
