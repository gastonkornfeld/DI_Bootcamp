
const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send(user);
//     // console.log(user);
// })

// app.use('/', express.static('public'));





// app.get('/:id', (req, res) => {
//     console.log("req.params: ", req.params);
//     console.log(req.query);
//     res.json({'id':req.params.id});
// })

app.use(express.static(__dirname + '/public'))



app.listen(3000);
