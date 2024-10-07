const areas = [
    { name: "Gjovik, Norway", latitude: 60.7955, longitude: 10.6855 },
    { name: "Oslo, Norway", latitude: 59.8655, longitude: 10.4855 },
    { name: "Hilo, Hawaii, USA", latitude: 19.6755, longitude: -155.6155 },
    { name: "Miami, Florida, USA", latitude: 25.8555, longitude: -80.2655 },
    { name: "Sydney, Australia", latitude: -33.8855, longitude: 151.1755 }
];

const weatherSec = document.getElementById("weatherSec");


update();
setInterval(update, 20000);


function update () {
    weatherSec.innerHTML = '';
    areas.forEach(area => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${area.latitude}&longitude=${area.longitude}&current_weather=true`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                const weatherData = json.current_weather;

                const areaDiv = document.createElement("div");
                areaDiv.classList.add("area");

                const areaName = document.createElement("h2");
                areaName.textContent = area.name;

                const temperature = document.createElement("p");
                temperature.textContent = `Temperature: ${weatherData.temperature}°C`;

                const windspeed = document.createElement("p");
                windspeed.textContent = `Windspeed: ${weatherData.windspeed} km/h`;

                console.log(areaName)
                console.log(temperature)
                console.log(windspeed)

                areaDiv.appendChild(areaName);
                areaDiv.appendChild(temperature);
                areaDiv.appendChild(windspeed);

                weatherSec.appendChild(areaDiv);
            })
    });
}
