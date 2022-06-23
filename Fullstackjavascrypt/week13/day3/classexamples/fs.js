




const express = require('express');
const app = express();



const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-34-200-35-222.compute-1.amazonaws.com',
        user: 'ykwpznbbsgzsam',
        password: '8ce4d68cca141b18bfd046fb4b7bd09947a8c00416238a5e3315386bfe99302d',
        database: 'd49rth5vjf0kgq',
        port: 5432,
        ssl: {rejectUnauthorized: false}
    }
});

// app.set("db", db);

app.listen(3000, () => console.log('Example app listening on port 3000!'));





app.get('/', (req, res) => {
  db
  .select().from('products')
  .then(products =>
    res.send(products)
  )
})

app.get('/:id', (req, res) => {
    db
    .select().from('products')
    .where('id', req.params.id)
    .then(product =>
      res.send(product)
    )
})



// const getAllProducts = (req, res) => {
//     return db('products')
//     .select('id', 'name', 'price')
//     .then(result => {
//         res.json(result);
//         console.log(result);
//     })
// }



