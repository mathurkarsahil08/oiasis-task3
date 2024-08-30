function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemp, resultText;

    if (isNaN(temp)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    switch (unit) {
        case 'celsius':
            convertedTemp = `${((temp * 9/5) + 32).toFixed(2)} °F (Fahrenheit), ${(temp + 273.15).toFixed(2)} K (Kelvin)`;
            resultText = `${temp} °C (Celsius) is equal to ${convertedTemp}`;
            break;
        case 'fahrenheit':
            convertedTemp = `${(((temp - 32) * 5/9)).toFixed(2)} °C (Celsius), ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
            resultText = `${temp} °F (Fahrenheit) is equal to ${convertedTemp}`;
            break;
        case 'kelvin':
            convertedTemp = `${(temp - 273.15).toFixed(2)} °C (Celsius), ${(((temp - 273.15) * 9/5) + 32).toFixed(2)} °F (Fahrenheit)`;
            resultText = `${temp} K (Kelvin) is equal to ${convertedTemp}`;
            break;
        default:
            resultText = "Error: Invalid unit selected.";
    }

    document.getElementById('result').innerText = resultText;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeBtn = document.getElementById('theme-btn');
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = '☀️ Light Mode';
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
    }
}
