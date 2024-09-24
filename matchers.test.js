test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  // Checks if a value is falsy, null, undefined,
  const n = null;
  expect(n).toBeFalsy();
});
