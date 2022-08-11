const celciusInput = document.getElementById("Celcius")
const fahrenheitInput = document.getElementById("Fahrenheit");
const kelvinInput = document.getElementById("Kelvin");

celciusInput.oninput = () => {
  let output = (parseFloat(celciusInput.value) * 1.8) + 32;
  let output2 = (parseFloat(celciusInput.value) + 273.15);
  fahrenheitInput.value = parseFloat(output.toFixed(2));
  kelvinInput.value = parseFloat(output2.toFixed(2));
};

fahrenheitInput.oninput = () => {
  let output = ((parseFloat(fahrenheitInput.value) - 32) / 1.8);
  let output2 = ((parseFloat(fahrenheitInput.value) - 32) / 1.8) + 273.15;
  celciusInput.value = parseFloat(output.toFixed(2));
  kelvinInput.value = parseFloat(output2.toFixed(2));
};

kelvinInput.oninput = () => {
  let output = (parseFloat(kelvinInput.value) - 273.15);
  let output2 = (parseFloat(celciusInput.value) * 1.8) + 32;
  celciusInput.value = parseFloat(output.toFixed(2));
  fahrenheitInput.value = parseFloat(output2.toFixed(2));
};
