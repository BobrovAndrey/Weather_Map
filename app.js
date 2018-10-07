//Inti weather obj
const weather = new Weather('London','GB');

//init UI

const ui = new UI();

// DOM at loaded

document.addEventListener('DOMContentLoaded', getWaether);

function getWaether(){
    weather.getWaether()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

