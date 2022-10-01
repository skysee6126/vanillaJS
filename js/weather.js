const weatherAPI = '015f12f5bc5e3f9a5cb8c771bb8c5a75';
const city = document.getSelector(#weather span:first-child);
const weather = document.getSelector(#weather span:first-last);

function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={${weatherAPI}}}`;
    fetch(URL)
        .then((response) => response.JSON())
        .then((data) => {
            city.innertext = data.name;
            weather.innertext = data.weather[0].main;
        })
}

function geoError() {
    console.log("failed to get geo info");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);