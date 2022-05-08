
// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.


class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}`;
  }
};

const videoNumberOne = new Video('The Mask', 'Frankestain', 7000);
const videoNumberTwo = new Video('Dracula', 'Moby Dick', 7200);

console.log(videoNumberOne.watch());


const bonusArray = [
  {
    title: 'title1',
    uploader: 'uploader1',
    time: 6000
  },
  {
    title: 'title2',
    uploader: 'uploader2',
    time: 6200
  },
  {
    title: 'title3',
    uploader: 'uploader3',
    time: 6500
  },
  {
    title: 'title4',
    uploader: 'uploader4',
    time: 6800
  },
  {
    title: 'title5',
    uploader: 'uploader5',
    time: 6300
  }
];

bonusArray.forEach((element, i) => {
  let video = new Video(element.title, element.uploader, element.time);
  console.log(video);
});
