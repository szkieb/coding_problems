const splitStringbyNumber = require("./coding_problem_nr_57");

test("splits sentence into pieces no longer than 10 characters each", () => {
  expect(
    splitStringbyNumber("the quick brown fox jumps over the lazy dog", 10)
  ).toStrictEqual([
    "the quick",
    " brown fox",
    " jumps over",
    " the lazy",
    " dog",
  ]);
});

test("splits sentence into pieces no longer than 15 characters each", () => {
  expect(
    splitStringbyNumber(
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      15
    )
  ).toStrictEqual([
    "At vero eos et",
    " accusamus et",
    " iusto odio",
    " dignissimos",
    " ducimus qui",
    " blanditiis",
    " praesentium",
    " voluptatum",
    " deleniti atque",
    " corrupti quos",
    " dolores et quas",
    " molestias",
    " excepturi sint",
    " occaecati",
    " cupiditate non",
    " provident",
  ]);
});
