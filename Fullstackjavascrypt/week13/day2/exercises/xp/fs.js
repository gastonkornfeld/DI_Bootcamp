

let fs = require('fs');
fs.readFile('sometext.txt', 'utf-8', function (err, data) {
    if (err) {
      console.error(err)
      return
    }
    console.log(data);
});




// exercise 2




fs.writeFile('data.txt', 'This is the exercise 2 file', function (err) { 
  if (err){ 
    console.log(err);
  }
  else{
    console.log('Write operation complete.');
  }
});







fs.appendFile('data.txt',  '\n this is a new line appended to the file', function (err) {
  if (err) {
      console.error(err)
      return
  } else {
    console.log('appended to the file');
  }
});



fs.unlink('data.txt', function (err) {
  console.log('file deleted');
});