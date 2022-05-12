

const robots = [
    {
      id: 1,
      name: 'Diego Forlan',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Frankey Lampard',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Roberto Carlos',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    },
    {
        id: 11,
        name: 'Cristiano Ronaldo',
        username: 'The boy scout',
        email: 'cris.Pronald@amdrid.lis',
        image:'https://robohash.org/11?200x200'
    },
    {
        id: 12,
        name: 'Lionel Messi',
        username: 'The Magician',
        email: 'liomess@argentina.arg',
        image:'https://robohash.org/12?200x200'
    },
    {
        id: 13,
        name: 'Zinedine Zidane',
        username: 'The Header',
        email: 'zinedine@france.lol',
        image:'https://robohash.org/13?200x200'
    },
    {
        id: 14,
        name: 'David Beckam',
        username: 'Magic Kick',
        email: 'david.beck@england.biz',
        image:'https://robohash.org/14?200x200'
    },
    {
        id: 15,
        name: 'Roger Federer',
        username: 'The bear',
        email: 'roger@federer.swi',
        image:'https://robohash.org/15?200x200'
    },
];

let robotsDiv = document.querySelector('.robots-list-div');
allRobots = [];



class Robot {
    constructor(id, name, username, email, image){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }
    createRobotCard() {
        this.robotCard = document.createElement('div');
        this.robotCard.className = 'robot-card';
        this.robotImage = document.createElement('img');
        this.robotImage.className = 'robot-image';
        this.robotImage.src = this.image;
        this.robotCard.append(this.robotImage);
        this.cardTitle = document.createElement('h4');
        this.cardTitle.className = 'card-title';
        this.cardTitle.textContent = this.name;
        this.robotCard.append(this.cardTitle);
        this.cardSubTitle = document.createElement('h5');
        this.cardSubTitle.className = 'card-sub-title';
        this.cardSubTitle.textContent = this.username;
        this.robotCard.append(this.cardSubTitle);
        this.robotEmail = document.createElement('h5');
        this.robotEmail.className = 'robot-email';
        this.robotEmail.textContent = this.email;
        this.robotCard.append(this.robotEmail);
        robotsDiv.append(this.robotCard);
        allRobots.push(this);
    };
    show() {
        this.robotCard.classList.remove('hidden');
    };
    hide() {
        this.robotCard.classList.add('hidden');

    };
}

robots.forEach((element) => {
    let currentRobot = new Robot(element.id, element.name, element.username, element.email, element.image);
    currentRobot.createRobotCard();
});

// make search loops throow the robots and hide the ones that not match the search value
function makeSearch(element) {
    let text = element.target.value.toUpperCase();
    allRobots.forEach(robot => robot.name.toUpperCase().includes(text)?robot.show():robot.hide());
}

let searchInput = document.querySelector('#search');
searchInput.addEventListener('input', makeSearch)
