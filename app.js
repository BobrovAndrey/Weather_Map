//init storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

//Inti weather obj
const weather = new Weather(weatherLocation.city,weatherLocation.country);

//init UI

const ui = new UI();
console.log(ui)

// DOM at loaded

document.addEventListener('DOMContentLoaded', getWaether);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    //Getweather again;

    getWaether();
    storage.setLocationData(city, country);

    //Close modal
    $('#locModal').modal('hide');
});

function getWaether(){
    weather.getWaether()
    .then(results => {
        if (results.error) {
            ui.showAlert(results.message)
        } else {
            ui.paint(results);
        }
    })
    .catch(err => console.log(err));
}

