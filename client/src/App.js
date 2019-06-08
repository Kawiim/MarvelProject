import React, { Component } from "react";
import logo from './logo.svg';
import Pokemon from "./Pokemon";
import Pagination from './Pagination';
import './App.css';

const apiUrl = "http://localhost:6969/pokemons/"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonList: [],
      pageOfItems: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
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

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }


  render() {
    const { pokemonList } = this.state;
    return (      
        <div>
          <h1>Pokedex</h1>

          <div className="content container">
            {this.state.pageOfItems.map(item =>
              <Pokemon pokeAttributs ={item} />
            )}
            <Pagination items={this.state.pokemonList} onChangePage={this.onChangePage} />
          </div>
        </div>
    );
  }
}

export default App;
