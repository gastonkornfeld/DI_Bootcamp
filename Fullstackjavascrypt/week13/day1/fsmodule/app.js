
// =========================================================================================================
// reading files


// let fs = require('fs');
// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data);
// });

// console.log("-----Restaurant Menu---------", '\n',);

// ===============================================================================================================
// writing to files, if the file doesnt exis it will created, if exist will erase and replace what was inside

// fs.writeFile('menu.txt', 'Hello World! this is a beautifull test we are doing here', function (err) { 
//   if (err){ 
//     console.log(err);
//   }
//   else{
//     console.log('Write operation complete.');
//   }
// });

// =====================================================================================================

// Using the fs.appendFile creates the file if it does not exist, and appends to the file otherwise.


// fs.appendFile('test.txt',  'calabaza calabaza \n', function (err) {
//   if (err) {
//       console.error(err)
//       return
//   } else {
//     console.log('appended to the file');
//   }
// });


// ==========================================================================================

// Use fs.unlink() method to delete an existing file.


// fs.unlink('test.txt', function (err) {
//   console.log('write operation complete.');
// });



// ======================================================================================


// We can use the fs.readdir method to list all the files and directories within a specified path:


// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log('files: ', files)
// })



// =========================================================================================
// kenx module to work whit databases


// We will work with PostgreSQL Database

// The knex module is itself a function which takes a configuration object for 
// Knex, accepting a few parameters. The client parameter is required and determines 
// which client adapter will be used with the library.

// Note: The database version can be added in knex configuration, 
// when you use the PostgreSQL adapter to connect a non-standard database.



const express = require('express');
const app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'postgres',
      database: 'dvdrental',
      port: 5432
    }
});

app.set("db", db);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// ===================select form db ========================================================
// app.get('/', (req, res) => {
//   db
//   .select().from('actor')
//   .then(actors =>
//     res.send(actors)
//   )
// })


// ======================add to the db =========================================================

// app.get('/', (req, res) => {
//   db('actor')
//     .returning('*')
//     .insert({ first_name: 'Gal', last_name: 'Gadot' })
//     .then(actors =>
//       res.send(actors)
//     )
// })




// ====================update entry of the db =========================================


// app.get('/', (req, res) => {
//   db('actor')
//     .where('first_name', 'gonzales')
//     .andWhere('last_name', 'margarita')
//     .update({
//       first_name: 'Alisa',
//       last_name: 'shmukler'
//     },
//       '*')
//     .then(actors =>
//         res.send(actors)
//     )
// })






// ===================delete db rows============================================================


app.get('/', (req, res) => {
  db('actor')
      .where('first_name', 'Alisa')
      .andWhere('last_name', 'shmukler')
      .del(['actor_id', 'first_name', 'last_name'])
      .then(actors =>
        res.send(actors)
      )
})





