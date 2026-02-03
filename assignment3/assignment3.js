//temperature conversion functions
function convertTemperature() {
    console.log("Convert Temperature button clicked");
    const DIV = document.getElementById("results");
    let tempInput = prompt("Enter the temperature number:");
    let scaleInput = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit:").toUpperCase();

    if (scaleInput === "C") {
        let fahrenheit = (tempInput * 9/5) + 32;
        DIV.innerHTML = `${tempInput}°C is equal to ${fahrenheit}°F`;
    } 
    else if (scaleInput === "F") {
        let celsius = (tempInput - 32) * 5/9;
        DIV.innerHTML = `${tempInput}°F is equal to ${celsius}°C`;
    } 
    else {
        DIV.innerHTML = "Invalid input. Please enter 'C' for Celsius or 'F' for Fahrenheit.";
    }
}



