const apikey = "d536c1e9697529817bc4c87373d03b2a";

const weatherDataElement = document.getElementById('weather-data');

const cityInputElement = document.getElementById('city-input');

const formElement = document.querySelector('form');

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputElement.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

    if (!response.ok) {
      throw new Error("Network respond was not ok");
    }

    const data = await response.json();
    // console.log(data);

    const temperature = Math.round(data.main.temp);

    const description = data.weather[0].description;

    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ]

    weatherDataElement.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather-Icon">`;

    weatherDataElement.querySelector('.temperature').textContent = `${temperature}°C`;

    weatherDataElement.querySelector('.description').textContent = `${description}`;

    weatherDataElement.querySelector('.details').innerHTML = details.map((detail) => 
      `<div>${detail}</div>`).join("");
      
  } catch (error) {
    weatherDataElement.querySelector('.icon').innerHTML = "";
    weatherDataElement.querySelector('.temperature').textContent = "";
    weatherDataElement.querySelector('.description').textContent = "An error happened. Please try again.";
    weatherDataElement.querySelector('.details').innerHTML = "";
  }
}



