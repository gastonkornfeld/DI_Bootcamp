

// function storeProduct() {
//     let product = document.getElementById('product').value;
//     let amount = document.getElementById('amount').value;
  
//     let productdata = {
//       product,
//       amount
//     }
//     console.log(productdata);
  
//     fetch('http://localhost:3000/product',{
//       method:'POST',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(productdata)
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       document.getElementById('root').innerHTML = `<h1>${data.product}</h1> <h2>${data.amount}</h2>`
//     })
//     .catch(e => console.log(e))
// }