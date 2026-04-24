const apiKey = "15b4373950f10c2242c9237063efa186"; 

// Get weather by city
async function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    displayWeather(data);
}

// Get weather using location
function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        displayWeather(data);
    });
}

// Display weather data
function displayWeather(data) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = `🌡 Temp: ${data.main.temp}°C`;
    document.getElementById("desc").innerText = `🌥 ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `🌬 Wind: ${data.wind.speed} m/s`;

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}