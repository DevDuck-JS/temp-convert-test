const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

console.log(celsius);
console.log(fahrenheit);

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input", () => {
  const celsiusValue = celsius.value;
  const calculatedFahrenheit = ((celsiusValue * 9) / 5 + 32).toFixed(2);

  fahrenheit.value = calculatedFahrenheit;

  // Log the entered Celsius and calculated Fahrenheit
  console.log(
    `Celsius: ${celsiusValue}, Calculated Fahrenheit: ${calculatedFahrenheit}`
  );

  if (!celsius.value) fahrenheit.value = "";
});

fahrenheit.addEventListener("input", () => {
  const fahrenheitValue = fahrenheit.value;
  const calculatedCelsius = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);

  celsius.value = calculatedCelsius;

  // Log the entered Fahrenheit and calculated Celsius
  console.log(
    `Fahrenheit: ${fahrenheitValue}, Calculated Celsius: ${calculatedCelsius}`
  );

  if (!fahrenheit.value) celsius.value = "";
});
