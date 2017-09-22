const express = require( 'express' );
const app = express();

app.use(function(req, res, next){
  console.log(req.method +' '+ req.url);
  next();
})
app.use('/rodri', function(req, res, next){
    res.send('Bienvenido a rodri');
    console.log('Entraste a rodri');
    next();
})

app.get('/', function (req, res) {
  res.send('que onda world')
})
app.get('/news', function (req, res) {
  res.send('Bienvenido a NEWS')
})

app.listen(9999, function () {
  console.log('Proceda, noble programador.')
})
