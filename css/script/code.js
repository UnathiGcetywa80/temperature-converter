function convertTemperature() {
    // Get the input values
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    // Convert Celsius to Fahrenheit
    if (celsiusInput.value !== '') {
      var celsiusValue = parseFloat(celsiusInput.value);
      var fahrenheitValue = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
    // Convert Fahrenheit to Celsius
    if (fahrenheitInput.value !== '') {
      var fahrenheitValue = parseFloat(fahrenheitInput.value);
      var celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = celsiusValue.toFixed(2);
    }
  }