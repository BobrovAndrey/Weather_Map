class Storage {
    constructor(){
        this.city;
        this.county;
        this.defaultCity = 'Poltava';
        this.defaultCountry = 'UA';

    }

    getLocationData() {
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('county') === null){
            this.county = this.defaultCountry;
        } else {
            this.county = localStorage.getItem('country');
        }

        return {
            city: this.city,
            state: this.state
        }

    }

    setLocationData(city,county) {
        localStorage.setItem('city',city);
        localStorage.setItem('country',county);
    }

}