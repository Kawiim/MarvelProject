import React, { Component } from "react";

class Pokemon extends React.Component {
  render() {
    return (
    	<li key={this.props.pokeAttributs.id}>
		    <h1>{this.props.pokeAttributs.name}</h1>
			<p>{this.props.pokeAttributs.height}</p>
			<p>{this.props.pokeAttributs.weight}</p>
		</li>
	    
    );
  }
}

export default Pokemon;