const fetch = require('node-fetch');

const fetchWeatherData = async () => {
    const apiKey = 'L43CYGG3L3BSRBGFQKH2DETVL';
    const location = '25 Alumni Dr Dover, NH 03820';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Weather at 25 Alumni Dr Dover, NH 03820:');
        displayWeather(data);
    } catch (error) {
        console.error('There was an error fetching the weather data!', error);
    }
};

const displayWeather = (data) => {
    console.log('Weather Forecast');
    data.days.forEach(day => {
        console.log(`Date: ${day.datetime}`);
        console.log(`Temperature: ${day.temp} °C`);
        console.log(`Chance of Rain: ${day.precipprob} %`);
    });
};

fetchWeatherData(); 