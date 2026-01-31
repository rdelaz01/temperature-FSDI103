// convert Celsius to Fahrenheit
function temperature(celsius) {
console.log("Converting Celsius to Fahrenheit...");
let celsiusInput = prompt("Enter temperature in Celsius:");
let fahrenheit = (celsiusInput * 9/5) + 32;
document.getElementById("tempOutput").innerHTML = `${celsiusInput}°C is equal to ${fahrenheit}°F`;
}