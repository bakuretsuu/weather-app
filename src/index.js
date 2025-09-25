// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import { getWeather } from "./api.js";

console.log(greeting);
getWeather("Manila").then(data => {
    console.log(`Temperature: ${data.temperature}°C`);
    console.log(`Conditions: ${data.conditions}`);
    console.log(`Humidity: ${data.humidity}%`);
  });
