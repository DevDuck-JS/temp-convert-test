const sum = require("./sum");

// test("description", testfunction)
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3); // matchers toBe(), to
});
