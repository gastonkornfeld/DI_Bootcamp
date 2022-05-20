

// get the location of the city you need

// the wheather api provide by developers institute was not working for me so i am using another app.
// i dont need the geolocation anymore


// let getGeoLocation = (cityName) =>{
//     let xhr = new XMLHttpRequest();
//     let completeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`;
//     xhr.open('GET', completeUrl);
//     // xhr.responseType = 'json';
//     xhr.onload = ()=> {
//         if(xhr.status == 200) {
//             let responseData = JSON.parse(xhr.response)[0];
//             let long = responseData.lon;
//             let lat = responseData.lat;
//             console.log(responseData);
//             getWheaterInformation(lat, long);
//         } else {
//             console.log("something went wrong");
//         }
//     };
//     xhr.onerror = function() {
//         console.log("Request failed");
//       };
//     xhr.send();
// }


// fetch('http://api.weatherapi.com/v1/current.json?key=9aa2f9ed5e844d46bf5202700221905 &q=London&aqi=no').then(response => response.json()).then(data => console.log(data));



// =============================================================================================================




let switchButton = document.querySelector('input[type="checkbox"]');
// This is the div where the wheater cards information are displayed
let cityWheaterListDiv = document.querySelector('.city-list-div');
// this array will hold all the instances of the wheater cards.
allCityWheaters = [];

let errorDiv = document.querySelector('.error-div');
let errorButton = document.querySelector('#error-button');

errorButton.addEventListener('click', ()=> errorDiv.style.display = 'none');
// document.body.addEventListener('click', ()=> errorDiv.style.display = 'none');


let getWheaterInformation = (city) =>{
    let xhr = new XMLHttpRequest();
    let completeUrl = `http://api.weatherapi.com/v1/current.json?key=9aa2f9ed5e844d46bf5202700221905 &q=${city}&aqi=no`;
    xhr.open('GET', completeUrl);
    // xhr.responseType = 'json';
    xhr.onload = ()=> {
        if(xhr.status == 200) {
            let responseData = JSON.parse(xhr.response);
            console.log(responseData);
            createCard(responseData);
        } else {
            console.log("something went wrong");
            errorDiv.style.display = 'flex';

        }
    };
    xhr.onerror = function() {
        console.log("Request failed");
      };
    xhr.send();
}





class WheaterCard {
    constructor(id, city, country, wheaterCondition, icon, celsius, farenheit){
        this.id = id;
        this.city = city;
        this.country = country;
        this.wheaterCondition = wheaterCondition;
        this.icon = icon;
        this.celsius = celsius;
        this.farenheit = farenheit;
    }
    delete(e) {
        let wheaterCard = e.target.parentElement;
        wheaterCard.parentElement.removeChild(wheaterCard);
    }
    createWheaterCard() {
        this.wheaterCard = document.createElement('div');//parent div
        this.wheaterCard.className = 'wheater-card';
        this.cityAndCountry = document.createElement('h3');
        this.cityAndCountry.className = 'city-country';
        this.cityAndCountry.textContent = `${this.city}, ${this.country}`;
        this.wheaterCard.append(this.cityAndCountry);
        this.wheaterIcon = document.createElement('img');
        this.wheaterIcon.className = 'wheater-icon';
        this.wheaterIcon.src = this.icon;
        this.wheaterCard.append(this.wheaterIcon);
        this.temperatureText = document.createElement('h4');
        this.temperatureText.className = 'temperature';
        this.temperatureText.textContent = !switchButton.checked? `${this.celsius}°C`:`${this.farenheit}°F`;
        this.wheaterCard.append(this.temperatureText);
        this.wheater = document.createElement('h5');
        this.wheater.className = 'weather';
        this.wheater.textContent = `${this.wheaterCondition}`;
        this.wheaterCard.append(this.wheater);
        this.deleteButton = document.createElement('button');
        this.deleteButton.textContent = 'Delete';
        this.deleteButton.className = 'delete-but';
        this.deleteButton.addEventListener('click', this.delete);
        this.wheaterCard.append(this.deleteButton);
        cityWheaterListDiv.append(this.wheaterCard);
        allCityWheaters.push(this);
    };
}


function createCard(data) {
        let currentCard = new WheaterCard(
            data.uv,
            data.location.name,
            data.location.country,
            data.current.condition.text,
            `https://${data.current.condition.icon}`,
            data.current.temp_c,
            data.current.temp_f,
        );
        currentCard.createWheaterCard();
    ;
}



// search for a city to get the weather information
function makeSearch() {
    // gifListDiv.innerHTML = '';
    let searchInput = document.querySelector('#search');
    console.log(searchInput);
    let text = searchInput.value;
    console.log(text);
    getWheaterInformation(text);
    searchInput.value = '';
}

let searchButton = document.querySelector('#search-but');
searchButton.addEventListener('click', makeSearch)


// let deleteAllButton = document.querySelector('#delete-all-but');

// function deleteAll() {
//     gifListDiv.innerHTML = ' ';
// }

// deleteAllButton.addEventListener('click', deleteAll);




// function to change the switch of the temperature between farenheit and celsius.
console.log(switchButton);

switchButton.addEventListener('change', function () {
    if (switchButton.checked) {
        allCityWheaters.forEach(element => {
            element.temperatureText.textContent = `${element.farenheit}°F`;
        });
    } else {
        allCityWheaters.forEach(element => {
            element.temperatureText.textContent = `${element.celsius}°C`;
        });
    };
});



getWheaterInformation('Tel Aviv');
getWheaterInformation('Jerusalem');
getWheaterInformation('Eilat');


