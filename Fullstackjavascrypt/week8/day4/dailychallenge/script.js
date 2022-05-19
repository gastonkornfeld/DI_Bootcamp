// Create a program to retrieve the data from the API URL provided above.
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

// Instructions


// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.

// In the HTML file, add a form, containing an input and a button.

// This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on
// the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint
// : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
let data;


let getResponseFromGiphy = (searchInput) =>{
    let xhr = new XMLHttpRequest();
    let offset = Math.floor(Math.random() * 100);
    let completeUrl = `https://api.giphy.com/v1/gifs/search?q=${searchInput}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1&offset=${offset}`;
    xhr.open('GET', completeUrl);
    // xhr.responseType = 'json';
    xhr.onload = ()=> {
        if(xhr.status == 200) {
            let responseData;
            responseData = JSON.parse(xhr.response);
            data = responseData.data;
            // console.log(data);
            createAllGifs(data);
        } else {
            console.log("something went wrong");
        }
    };
    xhr.onerror = function() {
        console.log("Request failed");
      };
    xhr.send();
}


let gifListDiv = document.querySelector('.gif-list-div');
allGifs = [];



class Gif {
    constructor(id, url, username){
        this.id = id;
        this.username = username;
        this.url = url;
    }
    delete(e) {
        let gifCard = e.target.parentElement;
        gifCard.parentElement.removeChild(gifCard);
    }
    createGifCard() {
        this.gifCard = document.createElement('div');
        this.gifCard.className = 'gif-card';
        this.gifImage = document.createElement('img');
        this.gifImage.className = 'gif-image';
        this.gifImage.src = this.url;
        this.gifCard.append(this.gifImage);
        this.cardTitle = document.createElement('h4');
        this.cardTitle.className = 'card-title';
        this.cardTitle.textContent = this.username;
        this.gifCard.append(this.cardTitle);
        this.deleteButton = document.createElement('button');
        this.deleteButton.textContent = 'Delete Gif';
        this.deleteButton.className = 'gif-but';
        this.deleteButton.addEventListener('click', this.delete)
        this.gifCard.append(this.deleteButton);
        gifListDiv.append(this.gifCard);
        allGifs.push(this);
    };
}


function createAllGifs(data) {
    data.forEach((element) => {
        let currentGif = new Gif(element.id, element.images.original.url, element.username);
        currentGif.createGifCard();
    });
}



// make search loops throow the robots and hide the ones that not match the search value
function makeSearch() {
    // gifListDiv.innerHTML = '';
    let searchInput = document.querySelector('#search');
    console.log(searchInput);
    let text = searchInput.value;
    console.log(text);
    getResponseFromGiphy(text);
}

let searchButton = document.querySelector('#search-but');
searchButton.addEventListener('click', makeSearch)


let deleteAllButton = document.querySelector('#delete-all-but');

function deleteAll() {
    gifListDiv.innerHTML = ' ';
}

deleteAllButton.addEventListener('click', deleteAll);