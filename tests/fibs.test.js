const { fibs, fibsRec } = require("../fibs");

describe("Fibs works", () => {
  it("iterative solution works", () => {
    expect(fibs(0)).toEqual([]);
    expect(fibs(1)).toEqual([0]);
    expect(fibs(2)).toEqual([0, 1]);
    expect(fibs(3)).toEqual([0, 1, 1]);
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it("recursive solution works", () => {
    expect(fibsRec(0)).toEqual([]);
    expect(fibsRec(1)).toEqual([0]);
    expect(fibsRec(2)).toEqual([0, 1]);
    expect(fibsRec(3)).toEqual([0, 1, 1]);
    expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  });
});
