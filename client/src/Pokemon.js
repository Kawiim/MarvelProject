import React from "react";
import Col from 'react-bootstrap/Col';

class Pokemon extends React.Component {
  render() {
    return (
    	<Col>
	    	<li key={this.props.pokeAttributs._id} class= "item">
			    <h1 class="pokeName">{this.props.pokeAttributs.name}</h1>
			    <img src={this.props.pokeAttributs.imageUrl}/>
				<p class="info">Height : {this.props.pokeAttributs.height}</p>
				<p class="info">Weight : {this.props.pokeAttributs.weight}</p>
			</li>
		</Col>
	);
  }
}

export default Pokemon;