



// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// expected output: Array [3, 42, "foo"]



// This waits for the result of the first fetch
// before starting the second fetch.
let results = [];

const urls = [
    'https://www.swapi.tech/api/starships/9/',
    'https://www.swapi.tech/api/starships/9/',
    'https://www.swapi.tech/api/starships/9/',
]

// This waits for the result of the first fetch
// before starting the second fetch.
const fetchStarships = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (response.status == 400) {
            throw new Error("API - wrong link")
        } else {
            console.log("response", response)
            let data = await response.json();
            console.log("data", data.result.properties);
            results.push(data.result);
            return data.result
        }
    } catch (err) {
        console.log(err)
    }
}


function threeResponses() {
    results = [];
    for(url of urls) {
        const result = fetchStarships(url);
        results.push(result);
    } 
    console.log(results);
}
threeResponses();

// fetchStarships(urls[0]);





// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()


// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242




const sunriseForm = document.forms.mainForm;

const getCitySunrise = (lat, long) => {
  return fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}
  `).then((res) => res.json());
};
const addToDom = (title, sunriseHour) => {
  const container = document.querySelector(".results");
  let retainer = container.childElementCount == 4;
  if(retainer) {
    container.innerHTML = '';
  }
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  h4.textContent = title;
  h4.classList.add("h4-sunrise");
  p.textContent = sunriseHour;
  p.classList.add("sunrise-text");
  container.append(h4, p);
};
sunriseForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formValues = new FormData(sunriseForm);
  const dataObject = new Object();
  for (let [key, value] of formValues) {
    dataObject[key] = value;
  }
  console.log(dataObject);
  const promiseCity1 = getCitySunrise(
    dataObject.input1,
    dataObject.input2
  );
  const promiseCity2 = getCitySunrise(
    dataObject.input3,
    dataObject.input4
  );
  Promise.all([promiseCity1, promiseCity2]).then((res) => {
    res.forEach((cityResult, index) => {
      addToDom(`Sunrise city number ${index + 1} is:`, cityResult.results.sunrise);
    });
  });
});
