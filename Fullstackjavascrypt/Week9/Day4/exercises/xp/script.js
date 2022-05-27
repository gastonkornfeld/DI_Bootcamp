

// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));



const fetchStarships = async (endpoint) => {
    try {
        const response = await fetch(endpoint);
        if (response.status == 400) {
            throw new Error("API - wrong link")
        } else {
            console.log("response", response)
            let data = await response.json();
            console.log("data", data.result.properties);
        }
    } catch (err) {
        console.log(err)
    }
}


fetchStarships('https://www.swapi.tech/api/starships/9/');











// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?


//  i think the output will be
// "calling"
// after 2 seconds
// "resolved"
// 



