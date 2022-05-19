


// let getResponse = () =>{
//     console.log('works');
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
//     // xhr.responseType = 'json';
//     let responseData;
//     console.log(xhr.responseText);
//     xhr.onload = ()=> {
//         if(xhr.status == 200) {
//             responseData = JSON.parse(xhr.response);
//             console.log(responseData.value);
//             console.log("first");
//         } else {
//             console.log("wrong");
//         }
//     };
//     xhr.onerror = function() {
//         console.log("Request failed");
//       };
//     xhr.send();
//     return responseData;
// }



// //Example
// let test = getResponse();
// console.log(test);

// pre-fill FormData from the form
// let xhr = new XMLHttpRequest();

// let json = JSON.stringify({
//     name: "John",
//     surname: "Smith"
// });

// xhr.open("POST", 'https://javascript.info/submit',{ mode:'no-cors'})
// xhr.setRequestHeader('Access-Control-Allow-Origin', "*");
// xhr.setRequestHeader('Access-Control-Allow-Headers', "*");
// xhr.withCredentials = false;
// xhr.send(json);

// xhr.onload = () => console.log(xhr.response);


fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My').then(response => response.json()).then(data => console.log(data));