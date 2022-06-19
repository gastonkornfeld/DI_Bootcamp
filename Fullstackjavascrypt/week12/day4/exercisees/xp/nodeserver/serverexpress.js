

const exp = require('express');
const app = exp();
app.listen(3000)

app.get('/', function (req, res) {
    res.send('<h1>This is an html tag</h1>')
})