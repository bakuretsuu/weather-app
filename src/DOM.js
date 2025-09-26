import { getWeather } from "./api.js";

export function domControl() {
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector("form");
      const locationInput = document.querySelector("#location");
  
      form.addEventListener("submit", async (event) => {
        event.preventDefault(); // stop page reload
        const location = locationInput.value.trim();
  
        if (!location) {
          console.log("⚠️ Please enter a location");
          return;
        }
  
        try {
          const data = await getWeather(location);
          console.log(`Temperature: ${data.temperature}°F`);
          console.log(`Conditions: ${data.conditions}`);
          console.log(`Humidity: ${data.humidity}%`);
        } catch (err) {
          console.error("Error fetching weather:", err);
        }
      });
    });
  }