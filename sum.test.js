const sum = require("./sum");

// test("description", testfunction)
test("2 plus 2 to be 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("2 plus 2 to equal 4", () => {
  expect(sum(2, 2)).toEqual(4);
});

test("2 plus 2 to be greater than 4", () => {
  expect(sum(2, 2)).toBeGreaterThan(4 - 1);
});

test("2 plus 2 to be less tha or equal than 4", () => {
  expect(sum(2, 2)).toBeLessThanOrEqual(4 + 1);
});
