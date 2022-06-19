


const express = require('express');
const cors = require('cors');
const {products} = require('./modules/products.js');


const app = express();
//require the module
const bodyParser = require("body-parser")

app.use('/', express.static(__dirname+'/public'));
//use the module
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());



app.use(bodyParser.json());
// app.use(bodyParser.raw());

app.get('/products',(req,res)=>{

    res.send(products)
})

app.post('/products',(req,res)=>{
    // console.log('req.body=>', req.body);
    const new_product = {
      id: products.length + 1,
      name: req.body.product,
      price: req.body.amount
    }
    products.push(new_product);
    res.send(products);
  
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));

