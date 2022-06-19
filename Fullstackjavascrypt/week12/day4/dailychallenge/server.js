


const express = require('express');
const app = express();

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use('/form',express.static(__dirname+'/public'));

app.get('/pic/', function (req, res) {
  res.send('<h1>Picture</h1> <br> <img style="height:400px; width:400px;" src="https://static.onecms.io/wp-content/uploads/sites/24/2020/06/08/GettyImages-10141026-1bunnies.-vikkihart-2000.jpg">');
  console.log('picture');
});

app.post('/formData', function (req, res) {
  console.log(req.body);
    res.send(req.body.email + ' just sent you a message that say: ' + req.body.message);
});

app.get('/aboutMe/:hobby',(req,res)=>{
  console.log(req.params);
  if (typeof req.params.hobby === 'string' || req.params.hobby instanceof String){
  res.send(req.params.hobby);
  }
  else {
    res.sendStatus(404);
  }
})

app.listen(3000, () => {
  console.log('listening port 3000')
});