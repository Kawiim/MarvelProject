const express = require('express');
const app = express();
const pokemon = require('./js/pokemon');

var mongoose = require('mongoose');
var PokemonModel = require('./schema/pokemonModel');

mongoose.connect('mongodb://localhost/pokemons');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/pokemons',function(req,res){
	PokemonModel.find({}, null, {sort: 'order'},  function(err, pokemons) {
		if(err) throw err;
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(pokemons))
	})
})


app.listen(6969, function () {
	console.log('Express server is listening on port 6969!')
	pokemon.fetchPokemonData();
})