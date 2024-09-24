const {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
} = require("./script");

describe("Temperature Conversion", () => {
  // Test for Celsius to Fahrenheit conversion
  test("convert Celsius to Fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(0)).toBe("32.00"); // 0°C is 32°F
    expect(convertCelsiusToFahrenheit(100)).toBe("212.00"); // 100°C is 212°F
    expect(convertCelsiusToFahrenheit(-40)).toBe("-40.00"); // -40°C is -40°F
  });

  // Test for Fahrenheit to Celsius conversion
  test("convert Fahrenheit to Celsius", () => {
    expect(convertFahrenheitToCelsius(32)).toBe("0.00"); // 32°F is 0°C
    expect(convertFahrenheitToCelsius(212)).toBe("100.00"); // 212°F is 100°C
    expect(convertFahrenheitToCelsius(-40)).toBe("-40.00"); // -40°F is -40°C
  });

  // Test edge cases (if needed)
  test("convert empty input", () => {
    expect(convertCelsiusToFahrenheit("")).toBe("32.00"); // Default edge case
    expect(convertFahrenheitToCelsius("")).toBe("-17.78"); // Default edge case
  });
});
