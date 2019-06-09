var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pokemonSchema = mongoose.Schema({
  order: Number,
  name: String,
  height: Number,
  weight: Number,
  imageUrl: String
});

var Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon;