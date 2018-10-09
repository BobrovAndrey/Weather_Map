class Weather {
    constructor (city,country) {
        this.apiKey = '866ee0ac61d0597aac09d05849f8d39e';
        this.city = city; 
        this.country = country;
    }
    
    //Get weather from API
    async getWaether(){
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);
            if (response.status === 200 ){
                const data = await response.json();
                return data;
            }
            else if (response.status === 404) {
                return { error: true, message: 'Place not found!'}
            } else {
                return { error: true, message: 'Something went wrong!'}
            }

    }

    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}