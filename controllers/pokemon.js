var rp = require('request-promise');

const nbResults = 100;

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

		        	rp(optionsSingle)
		        		.then(function (result) {
		        			console.log(result)
		        		})
		        		.catch(function(err){
		        			console.log("[REQUEST] API call fails !")
		        		})
		        })
		    })
		    .catch(function (err) {
		        console.log("[REQUEST] API call fails !")
		    });
			    
	}
}


