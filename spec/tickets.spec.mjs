import { padTicketNum } from "../src/tickets.mjs";

describe("padTicketNum", function () {
  it("should pad single digits", function () {
    expect(padTicketNum(0)).toBe("000");
    expect(padTicketNum(1)).toBe("000");
    expect(padTicketNum(9)).toBe("000");
  });

  it("should pad two digits", function () {
    expect(padTicketNum(10)).toBe("00");
    expect(padTicketNum(15)).toBe("00");
    expect(padTicketNum(99)).toBe("00");
  });

  it("should pad three digits", function () {
    expect(padTicketNum(100)).toBe("0");
    expect(padTicketNum(999)).toBe("0");
  });

  it("should not pad >= four digits", function () {
    expect(padTicketNum(1000)).toBe("");
    expect(padTicketNum(9999)).toBe("");
    expect(padTicketNum(10e6)).toBe("");
  });

  it("should not pad NaN", function () {
    expect(padTicketNum(NaN)).toBe("");
  });

  it("should not pad null", function () {
    expect(padTicketNum(null)).toBe("");
  });

  it("should not pad undefined", function () {
    expect(padTicketNum(undefined)).toBe("");
  });

  it("should not pad non-numeric strings", function () {
    expect(padTicketNum("foo")).toBe("");
  });

  it("should convert and pad numeric strings", function () {
    expect(padTicketNum("0")).toBe("000");
    expect(padTicketNum("10")).toBe("00");
    expect(padTicketNum("888")).toBe("0");
    expect(padTicketNum("9151")).toBe("");
  });

  it("should not pad negative values", function () {
    expect(padTicketNum(-1)).toBe("");
    expect(padTicketNum(-1e9)).toBe("");
  });
});
