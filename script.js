function suggestCrop(temp, humidity, weatherDescription) {
    if (weatherDescription.includes('rain')) {
        return "Rice, Wheat, Corn";
    } else if (weatherDescription.includes('sun') || temp > 30) {
        return "Maize, Soybean, Cotton";
    } else if (weatherDescription.includes('haze') || humidity > 50) {
        return "Barley, Oats, Sorghum";
    } else {
        return "No specific recommendation. Check local agriculture guidelines.";
    }
}

// Example weather parameters
const temperature = 36; // in Celsius
const humidity = 41; // in percentage
const weather = "haze";

// Get crop suggestion based on weather parameters
const cropSuggestion = suggestCrop(temperature, humidity, weather);

// Display crop suggestion on the screen
const cropContainer = document.getElementById('crop-suggestion');
const cropText = document.createElement('p');
cropText.className = 'crop-suggestion-text';
cropText.textContent = 'Crops to grow: ' + cropSuggestion;
cropContainer.appendChild(cropText);
