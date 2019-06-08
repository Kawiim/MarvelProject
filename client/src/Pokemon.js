import React, { Component } from "react";

class Pokemon extends React.Component {
  render() {
    return (
    	<li key={this.props.pokeAttributs._id}>
		    <h1>{this.props.pokeAttributs.name}</h1>
		    <img src={this.props.pokeAttributs.imageUrl}/>
			<p>{this.props.pokeAttributs.height}</p>
			<p>{this.props.pokeAttributs.weight}</p>
		</li>
	);
  }
}

export default Pokemon;