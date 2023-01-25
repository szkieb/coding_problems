const findIndex = require("./coding_problem_nr_58");

test("return the number 4", () => {
  expect(findIndex([13, 18, 25, 2, 8, 10], 8)).toStrictEqual(4);
});

test("return null because number given was not present in given array", () => {
  expect(findIndex([13, 18, 25, 2, 8, 10], 6)).toStrictEqual(null);
});
