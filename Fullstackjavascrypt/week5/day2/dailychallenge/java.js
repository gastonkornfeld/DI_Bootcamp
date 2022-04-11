

let libButton = document.getElementById('lib-button');

let storyDiv = document.getElementById("story");


function libIt() {
    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let person = document.getElementById('person').value;
    let place = document.getElementById('place').value;
    let verb = document.getElementById('verb').value;
    if ((
        person != '' &&
        adjective != '' &&
        person != '' &&
        verb != '' &&
        place != ''
        ) && (storyDiv.children.length < 3)) {
        let firstParagraph = [
            `Once upon a time in a far away land call it ${place}`,
            `We went to the ${place} to have fun, but the moon turned out to be completely ${adjective}.`,
            `In the light of the moon, a little ${noun} lay on a ${place}.`,
            `On Thursday, when ${person} woke up, she found she had ${verb} ${noun}`,
            `There was a boy called ${person} and he almost ${verb}.`,
        ]
        let middleParagraph = [
            ` ${person} saw a few ${adjective} ${noun} in the distance of ${place}`,
            `some ${noun} where growing up in ${place} and make ${person} to be ${adjective} `,
            `the end of the ${adjective} ${person} life whas coming to and end, so it was tempted to start ${verb}ing`,
            `he save the ${noun} again ${verb}ing, so ${person} started to think he was a little ${adjective}`,
            `he was ${verb}ing, dont ever tell ${person} anything. If you do, you start missing your ${noun}.`,
        ]
        let lastParagraph = [
            `After all, tomorrow is another ${adjective} day in ${place}.`,
            `He ${verb} the light and went into ${person} room. He would be there all night, and he would be there when ${person} waked up in the morning.`,
            `The creatures in ${place} looked from pig to ${noun}, and from ${noun} to pig, and from pig to ${noun} again; but already it was impossible to say which was which`,
            `But wherever they ${verb}, and whatever happens to ${noun} on the way, in that ${adjective} place on the top of the Forest ${person} and his Bear will always be playing.`,
            `It is not often that someone ${verb} along who is a true friend and a ${noun} writer. ${person} was both.`,
        ]
        let firstSentence = firstParagraph[Math.floor(Math.random() * 5)];
        let secondSentece = middleParagraph[Math.floor(Math.random() * 5)];
        let lastSentence = lastParagraph[Math.floor(Math.random() * 5)];
        console.log(lastSentence);
        let story = `${firstSentence} , ${secondSentece}, in the end ${lastSentence}`;
        let newDiv = document.createElement('div');
        let node = document.createTextNode(story);
        newDiv.appendChild(node);
        storyDiv.appendChild(newDiv);
    } else if (storyDiv.children.length >= 3 ) {
        alert('You can only generate 3 stories');
    } else {
        alert('fill all the blanks to generate a story');
    }

};


libButton.addEventListener('click', libIt);


storyDiv.style.padding = '10px';
storyDiv.style.fontSize = '15px';
storyDiv.style.lineHeight = '25px';
