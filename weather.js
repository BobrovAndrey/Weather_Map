class Weather {
    constructor (city,country) {
        this.apiKey = '866ee0ac61d0597aac09d05849f8d39e';
        this.city = city; 
        this.country = country;
    }
    
    //Get weather from API
    async getWaether(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

        console.log(response);

        const data = await response.json();

        console.log(data);
        
        return data;
       

    }

    changeLocation(city, country){
        this.sity = city;
        this.country = country;
    }
}