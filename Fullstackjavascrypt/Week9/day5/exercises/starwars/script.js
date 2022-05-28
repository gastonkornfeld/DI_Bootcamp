



// This is the div where the wheater cards information are displayed
let characterDiv = document.querySelector('.character-div');


const characterInformation = async () => {
    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${Math.floor(Math.random() * 83)}`);
        if (response.status != 200) {
            throw new Error("API - wrong link")
        } else {
            console.log("response", response)
            let data = await response.json();
            console.log("data", data)
            // let description = data.result.description;
            // let name = data.result.properties.name;
            // let height = data.result.properties.height;
            createCard(data);
        }
    } catch (err) {
        characterDiv.innerHTML = `Sorry ${err}`;
    }
}

// name, height, gender, birth year, and home world



class StarwarsCharacter {
    constructor(name, height, gender, birth, description){
        this.name = name;
        this.height = height;
        this.gender = gender;
        this.birth = birth;
        this.description = description;
    }
    // delete(e) {
    //     let wheaterCard = e.target.parentElement;
    //     wheaterCard.parentElement.removeChild(wheaterCard);
    // }
    createStarWarsCharacter() {
        this.StarwarsCharacter = document.createElement('div');//parent div
        this.StarwarsCharacter.className = 'character-card';
        this.nameParagraph = document.createElement('p');
        this.nameParagraph.className = 'name-p';
        this.nameParagraph.textContent = `Character Name: ${this.name}`;
        this.StarwarsCharacter.append(this.nameParagraph);
        this.heightParagraph = document.createElement('p');
        this.heightParagraph.className = 'height-p';
        this.heightParagraph.textContent = `Character height: ${this.height}cm`;
        this.StarwarsCharacter.append(this.heightParagraph);
        this.genderParagraph = document.createElement('p');
        this.genderParagraph.className = 'gender-p';
        this.genderParagraph.textContent = `Gender: ${this.gender}`;
        this.StarwarsCharacter.append(this.genderParagraph);
        this.birthParagraph = document.createElement('p');
        this.birthParagraph.className = 'birth-p';
        this.birthParagraph.textContent = `Birth Year: ${this.birth}`;
        this.StarwarsCharacter.append(this.birthParagraph);
        this.descriptionParagraph = document.createElement('p');
        this.descriptionParagraph.className = 'description-p';
        this.descriptionParagraph.textContent = `Character description: ${this.description}`;
        this.StarwarsCharacter.append(this.descriptionParagraph);
        characterDiv.append(this.StarwarsCharacter);
    };
}


function createCard(data) {
        let currentCard = new StarwarsCharacter(
            data.result.properties.name,
            data.result.properties.height,
            data.result.properties.gender,
            data.result.properties.birth_year,
            data.result.description,
        );
        currentCard.createStarWarsCharacter();
    ;
}

let searchButton = document.querySelector('#search-but');

let loader = document.querySelector('.loader');

searchButton.onclick = async function () {
    characterDiv.innerHTML = ''
    loader.style.display = 'block'
    try {
        const nextContent = await characterInformation()
        loader.style.display = 'none'
    } catch(err) {
        alert('error');

    }
    
}

// search for a city to get the weather information
// function makeSearch() {
//     // gifListDiv.innerHTML = '';
//     getWheaterInformation(text);
// }

// searchButton.addEventListener('click', makeSearch)


// let deleteAllButton = document.querySelector('#delete-all-but');

// function deleteAll() {
//     gifListDiv.innerHTML = ' ';
// }

// deleteAllButton.addEventListener('click', deleteAll);




// function to change the switch of the temperature between farenheit and celsius.


