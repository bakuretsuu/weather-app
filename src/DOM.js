import { getWeather } from "./api.js";

export function domControl() {
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector("form");
      const locationInput = document.querySelector("#location");
      const temp = document.querySelector(".temperature");
      const humidity = document.querySelector(".humidity");
      const conditions = document.querySelector(".conditions");
  
      form.addEventListener("submit", async (event) => {
        event.preventDefault(); 
        const location = locationInput.value.trim();
  
        if (!location) {
          temp.textContent = "";
          humidity.textContent = "";
          conditions.textContent = "⚠️ Please enter a location";
          return;
        }
  
        try {
          const data = await getWeather(location);
          temp.textContent = `🌡 Temperature: ${data.temperature}°F`;
          humidity.textContent = `💧 Humidity: ${data.humidity}%`;
          conditions.textContent = `☁️ Conditions: ${data.conditions}`;
        } catch (err) {
          temp.textContent = "";
          humidity.textContent = "";
          conditions.textContent = "❌ Error fetching weather";
          console.error("Error fetching weather:", err);
        }
      });
    });
  }