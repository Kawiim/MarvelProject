var rp = require('request-promise');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokemons');

var PokemonModel = require('../schema/pokemonModel');
PokemonModel.remove({}, function(err) { 
   console.log('collection removed') 
});

const nbResults = 300;
pokemonData = [];
pokemonRequestPromises = [];

module.exports = {

    fetchPokemonData : function() {
    	console.log("[Pokemon] Requesting information online...")

    	var optionsList = {
		    uri: 'https://pokeapi.co/api/v2/pokemon/?limit='+nbResults,
		    headers: {
		        'User-Agent': 'Request-Promise'
		    },
		    json: true
		};
		 
		rp(optionsList)
		    .then(function (responses) {
		        responses.results.forEach(function(response){
		        	var optionsSingle = {
		        		uri: response.url,
		        		headers: {
					        'User-Agent': 'Request-Promise'
					    },
					    json: true
		        	};

		        	pokemonRequestPromises.push(rp(optionsSingle)
		        		.then(function (result) {
		        			pokemonData.push(result)
		        			var pokemon = new PokemonModel({
		        				order: result.id,
		        				name: result.name, 
							 	weight: result.weight, 
							 	height: result.height,
							 	imageUrl: result.sprites.front_default
							});
						
							pokemon.save(function(err, rest){
								if(err) return console.error(err)
							})

		        		})
		        		.catch(function(err){
		        			console.log("[REQUEST] API call fails : " + err)
		        		})
		        	)
		        })
		    })
		    .catch(function (err) {
		        console.log("[REQUEST] API call fails : " + err)
		    })

		    .then(function(){            	
		    	Promise.all(pokemonRequestPromises).then(() => {
					console.log("[Pokemon] All data fetched !")
		    	})
		    	
		    })


			    
	}
}


