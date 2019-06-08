import React, { Component } from "react";
import logo from './logo.svg';
import Pokemon from "./Pokemon";
import './App.css';

const apiUrl = "http://localhost:6969/pokemons/"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonList: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(apiUrl, { accept: 'application/json' })
      .then(response => response.json())
      .then(data => this.setState({ pokemonList: data }));
  }

  handleChange(event) {
    fetch(apiUrl, { accept: 'application/json' })
    .then(response => response.json())
    .then(data => this.setState({ pokemonList: data }));
  }


  render() {
    const { pokemonList } = this.state;
    return (      
        <div>
          <h1>Pokedex</h1>
          <div className="content container">
            <ul>
              {pokemonList.map(poke =>
                <Pokemon pokeAttributs ={poke} />
              )}
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
