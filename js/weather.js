const API_KEY = "3a17c5ba9add5d8e947a0d94071a3d29";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${Math.round(data.main.temp)}° @`;
    });
}

function onGeoError() {
  alert("location cannot be found. Cannot display weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
