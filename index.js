// Function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheitTemp) {
    return (fahrenheitTemp - 32) * (5 / 9);
}

// Function to describe the temperature
function describeTemperature(fahrenheitTemp) {
    if (fahrenheitTemp < 32) {
        return "very cold";
    } else if (fahrenheitTemp < 64) {
        return "cold";
    } else if (fahrenheitTemp < 86) {
        return "warm";
    } else if (fahrenheitTemp < 100) {
        return "hot";
    } else {
        return "very hot";
    }
}

// Prompt the user to enter a Fahrenheit temperature
let fahrenheitTemp = parseFloat(prompt("Enter a temperature in Fahrenheit:"));

// Convert the input to Celsius
let celsiusTemp = convertToCelsius(fahrenheitTemp);

// Get the description of the temperature
let temperatureDescription = describeTemperature(fahrenheitTemp);

// Alert the user with the result
alert(`You entered ${fahrenheitTemp}°F, which is ${celsiusTemp.toFixed(2)}°C, and it feels ${temperatureDescription}.`);
