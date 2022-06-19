function addProduct() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

  fetch('http://localhost:5000/api/products/2',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({name,price})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}
