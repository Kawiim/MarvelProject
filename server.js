const express = require('express');
const app = express();
const pokemon = require('./controllers/pokemon');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req,res){
    res.json("Hello World")
})


app.listen(6969, function () {
	console.log('Express server is listening on port 6969!')

	pokemon.fetchPokemonData();

	
})