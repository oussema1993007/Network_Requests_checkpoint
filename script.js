const apiKey = 'fe824cb856a37281c8c13e7a5fbbd488';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('city-data');
const searchButton = document.querySelector('button[type="button"]');
const searchForm = document.getElementById('search-form');

const weatherContainer = document.getElementById('weather-container');
const weatherIcon = weatherContainer.querySelector('img');
const locationElement = weatherContainer.querySelector('h1');
const temperatureElement = weatherContainer.querySelector('h2');
const descriptionElement = weatherContainer.querySelector('h3');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchingWeather(city);
    }
});

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetchingWeather(city);
    }
});

async function fetchingWeather(city) {
    try {
        const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    } catch (error) {
        console.error('Error fetching:', error);
    }
};
