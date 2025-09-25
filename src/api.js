export async function getWeather(location) {
    const API_KEY = '8Y6B8TBE2D97C9A8B5XEBAEEE';
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?key=${API_KEY}`
    );
    const weatherData = await response.json();
    const temperature = weatherData.currentConditions.temp;
    const conditions = weatherData.currentConditions.conditions;
    const humidity  = weatherData.currentConditions.humidity;

    return { temperature, conditions, humidity }; 
  }
  