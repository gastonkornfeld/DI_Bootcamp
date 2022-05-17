


// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:
// output

let form = document.forms[0];
formNameValues = [...form.name];
// console.log(formNameValues);

// console.log(form);


form.addEventListener('submit', (e) => {
  e.preventDefault();
  fName = JSON.stringify([...form.name].map( target => target.value)); //this return an array.
  console.log(fName);
  let myJsonObj = {
    'name': formNameValues[0].value,
    'last_name': formNameValues[1].value,
  }

  console.log(JSON.stringify(myJsonObj));
})


