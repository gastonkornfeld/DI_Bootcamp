


// const imported = require('./modules/axiosfetch.js')


// // imported.fetchTest('https://jsonplaceholder.typicode.com/users');


// console.log(imported('https://www.swapi.tech/api/people/1'));




const express = require('express');
const products = require('./modules/products.js');
console.log(products);
const app = express();

app.listen(5000, ()=>{
  console.log('server is running on port 5000');
})

app.get('/api/products',(req,res)=>{
  res.json(products)
})

app.get('/api/search',(req,res)=>{
  const name = req.query.q;
  const filter_products = products.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  })
  if(filter_products<1){
   return res.status(200).json({msg:'product not found'})
  }
  res.json(filter_products)
})

app.get('/api/products/:id', (req,res)=>{
  // console.log(req.params);
  const id = req.params.id
  const product = products.find(item => item.id == id);
  if(!product){
    return res.status(404).json({msg:'not found'})
  }
  res.json(product);
})