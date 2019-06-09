import React, { Component } from "react";
import logo from './poke_logo.png';
import Pokemon from "./Pokemon";
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';


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
    return (  
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src= {logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            {' PokeReact '}
          </Navbar.Brand>
        </Navbar>    
        <div>
          <h4>You'll find on this website all the data you need about the Pokemon universe !</h4>

          <div className="content container">
            <Row className="justify-content-md-center">
              {this.state.pageOfItems.map(item =>
                <Pokemon pokeAttributs ={item} />
              )}
              <Pagination items={this.state.pokemonList} onChangePage={this.onChangePage} />
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
