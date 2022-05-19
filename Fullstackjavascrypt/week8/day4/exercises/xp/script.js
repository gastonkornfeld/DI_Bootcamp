// Create a program to retrieve the data from the API URL provided above.
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.


let getResponse = (url) =>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // xhr.responseType = 'json';
    let responseData;
    xhr.onload = ()=> {
        if(xhr.status == 200) {
            responseData = JSON.parse(xhr.response);
            console.log(responseData.data);
        } else {
            console.log("something went wrong");
        }
    };
    xhr.onerror = function() {
        console.log("Request failed");
      };
    xhr.send();
}



// //Example
getResponse('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');



// Exercise 2 : Giphy API
// Instructions
// Using this part of the documention,
//  retrieve 10 gifs about the “sun”. 
//  The starting position of the results should be 2.

getResponse('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2&limit=10')
// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My').then(response => response.json()).then(data => console.log(data));