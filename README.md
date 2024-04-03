### Farmers Weather Alert

This is a simple web application that provides weather information and crop suggestions based on the current weather conditions. It uses HTML, CSS, and JavaScript.

#### Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone <repository_url>
   ```

2. Open the `index.html` file in your preferred web browser.

#### Features

- **Weather Information**: The application fetches weather information based on the user's current location using geolocation.

- **Crop Suggestions**: Based on the weather conditions, the application suggests suitable crops to grow.

#### Technologies Used

- HTML
- CSS
- JavaScript

#### How to Use

1. Open the application in a web browser.
2. Allow the browser to access your location.
3. The application will display weather information and crop suggestions based on the retrieved data.

#### Example Code Snippet

```javascript
// Function to suggest crops based on weather conditions
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
```

#### Screenshots

![image](https://github.com/piyushshrma/Farmer-Sample/assets/141904179/e49deacb-9c9f-44f8-be5e-c4b90e75d91a)
![image](https://github.com/piyushshrma/Farmer-Sample/assets/141904179/a2d03aba-1c68-4c02-90f3-ea7f23422569)



#### License

This project is licensed under the [MIT License](LICENSE).


#### Authors

Piyush Sharma

---

Feel free to customize and expand upon this project as needed. If you have any questions or suggestions, please don't hesitate to contact me.
