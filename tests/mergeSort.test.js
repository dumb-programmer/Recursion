const mergeSort = require("../mergeSort");

it("mergeSort works", () => {
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort([1])).toEqual([1]);
  expect(mergeSort([2, 1])).toEqual([1, 2]);
  expect(mergeSort([10, 4, 2, -5])).toEqual([-5, 2, 4, 10]);
  expect(mergeSort([4, 8, 6, 2, 1, 7, 5, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
