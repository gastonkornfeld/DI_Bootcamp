

// console.log(form.elements.login); // <input name="login" type="text">
// let formFieldset = form.elements.userFields;
// console.log(formFieldset);
// // <fieldset name="userFields">
// //   <legend>info</legend>
// //   <input name="login" type="text">
// // </fieldset>

// // we can get the input by name both from the form and from the fieldset
// console.log(formFieldset    .elements.login == form.elements.login); // true




// console.log(form.elements.login == form.login); // true, the same <input>
// form.elements[0].name = "username";
// // change the name of the input
// // form.elements updated the name:
// console.log(form.elements.login); // undefined
// console.log(form.elements.username); // <input name="username">
// // form allows both names: the new one and the old one
// console.log(form.username == form.login); // true





// // // form -> element
// let inputLogin = document.forms[0].login;
// console.log(inputLogin) // <input type="text" name="login">

// // // element -> form
// console.log(inputLogin.form); 

// select.options[2].selected = true;
// select.selectedIndex = 4;
// // select.value = 'Sandia';






// function validate(frm){
//     console.log(frm);
//     let val = frm.txt.value;
//     alert(val)
//     if(val === 'ziv')
//         return false;
//     else
//         return true;
//   }







// make a form submitt whit javascrypt

// let form = document.createElement('form');
// form.action = 'https://google.com/search';
// form.method = 'GET';

// form.innerHTML = '<input name="q" value="test">';
// // // the form must be in the document to submit it
// document.body.append(form);

// form.submit();










// formElem.onsubmit = async (e) => {
//     e.preventDefault();
//     let response = await fetch('/article/formdata/post/user', {
//         method: 'POST',
//         body: new FormData(formElem)
//     });

//     let result = await response.json();
//     alert(result.message);
// };

// let formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');
// console.log(formData);
// // // List key/value pairs
// for(let [name, value] of formData) {
//     console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
// }







// validation whit javascrypt

// const form  = document.getElementsByTagName('form')[0];
// const email = document.getElementById("mail");
// const name = document.getElementById("name");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// form.addEventListener("submit", function (event) {
//   if(!email.validity.valid) {
//       email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//       email.setCustomValidity("");
//   }
// });






// Constraint Validation HTML Input Attributes
// Attribute	Description
// disabled	Specifies that the input element should be disabled
// max	Specifies the maximum value of an input element
// min	Specifies the minimum value of an input element
// pattern	Specifies the value pattern of an input element
// required	Specifies that the input field requires an element
// type	Specifies the type of an input element


// Your Name: <input type="text" name="name" required>
// Age: <input type="number" size="6" name="age" min="18" max="99" value="21"><br>
// Happiness: <input type="range" size="2" name="satisfaction" min="1" max="5" value="3"></input>