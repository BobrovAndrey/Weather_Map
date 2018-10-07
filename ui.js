class UI{
    constructor (){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('ui-first');
        this.feelsLike = document.getElementById('ui-second');
        this.dewpoint = document.getElementById('ui-third');
        this.wind = document.getElementById('ui-fourth');
    }


    paint(data){
        this.location.textContent = data.name;
        this.desc.textContent = data.weather[0].description;
        this.string.textContent = farToCel(data.main.temp) + ` Temp`;
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        console.log(this.icon);

    }

}

function farToCel(temp){
    return Math.trunc(temp - 273.15);
}