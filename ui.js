class UI{
    constructor (){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('ui-first');
        this.windSpeed = document.getElementById('ui-second');
        this.pressure = document.getElementById('ui-third');
        this.clouds = document.getElementById('ui-fourth');
        this.alert = document.getElementById('w-alert')
    }


    paint(data){
        this.location.textContent = data.name;
        this.desc.textContent = data.weather[0].description;
        this.string.textContent = farToCel(data.main.temp) + ` C°`;
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.humidity.textContent = `Average Humidity: ${data.main.humidity}°`;
        this.windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        this.pressure.textContent = `Pressure: ${data.main.pressure} hpa`;
        this.clouds.textContent = `Clouds: ${data.clouds.all}%`;
        this.alert.classList.remove('show')
    }

    showAlert(message){
        this.alert.classList.add('show')
        this.alert.innerText = message
    }
}

function farToCel(temp){
    return Math.trunc(temp - 273.15);
}