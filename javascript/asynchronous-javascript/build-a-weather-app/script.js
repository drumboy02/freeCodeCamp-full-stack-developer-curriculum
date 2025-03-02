const getForecastBtn = document.getElementById("get-forecast");
const select = document.querySelector("select");
const forecast = document.getElementById("forecast");

getForecastBtn.addEventListener("click", () => {
  forecast.innerHTML = '';

  const weatherIcon = document.createElement("img");
  weatherIcon.setAttribute("id", "weather-icon");

  const mainTemperature = document.createElement("div");
  mainTemperature.setAttribute("id", "main-temperature");

  const feelsLike = document.createElement("div");
  feelsLike.setAttribute("id", "feels-like");

  const humidity = document.createElement("div");
  humidity.setAttribute("id", "humidity");

  const wind = document.createElement("div");
  wind.setAttribute("id", "wind");

  const windGust = document.createElement("div");
  windGust.setAttribute("id", "wind-gust");

  const weatherMain = document.createElement("div");
  weatherMain.setAttribute("id", "weather-main");

  const location = document.createElement("div");
  location.setAttribute("id", "location");

  const city = select.value;
  if (!city) return;

  forecast.append(location, mainTemperature, weatherMain, weatherIcon, feelsLike, humidity, wind, windGust);
  showWeather(city)
});

const getWeather = async (city) => {
  const infoFrom = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;
  let data;

  try {
    data = await fetch(infoFrom)
      .then(res => res.json());
  } catch (err) {
    console.log(err);
  }

  return data;
}

const showWeather = async (city) => {
  // call getWeather for city. if error, alert
  const data = await getWeather(city);

  if (data.error) {
    forecast.innerHTML = '';
    return alert("Something went wrong, please try again later");
  }

  // else display weather data. (undefined = N/A)
  forecast.querySelector("#weather-icon").setAttribute("src", data.weather[0].icon);
  forecast.querySelector("#main-temperature").textContent = data.main.temp + "°C";
  forecast.querySelector("#feels-like").textContent = "Feels Like: " + data.main.feels_like + "°C";
  forecast.querySelector("#humidity").textContent = "Humidity: " + data.main.humidity + "%";
  forecast.querySelector("#wind").textContent = "Wind: " + data.wind.speed + " m/s";
  forecast.querySelector("#wind-gust").textContent = data.wind.gust ? "Gusts: " + data.wind.gust + " m/s" : "Gusts: N/A";
  forecast.querySelector("#weather-main").textContent = data.weather[0].main;
  forecast.querySelector("#location").textContent = data.name;
}
