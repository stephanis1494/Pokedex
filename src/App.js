import React, { Component } from 'react';
import './App.css';
import Pokedex from 'pokedex-promise-v2';
import Results from './components/Results';

const options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}

const P = new Pokedex(options);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      name: '',
      height: '',
      type: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    P.getPokemonByName(this.state.value)
      .then(response => {
        this.setState({
          name: response.name,
          height: response.height,
          type: response.types[0].type.name
        })
        console.log(response);
        console.log(this.state);
      })
      .catch(function(error) {
        console.log(error);
    })
      e.preventDefault();
  }

  returnResults() {
    if(this.state.name !== '') {
      return <Results
        name={this.state.name}
        type={this.state.type}
       />
    }
  }


  render() {
    return(
      <div className='container'>
        <div className='page-header'>
          <div className='jumbotron'>
            <h1>Welcome to Pokedex</h1>
            <h3>Powered by Pokeapi.co</h3>
            <p>Please enter a pokemon in the search field below</p>
          </div>
        </div>
      <div className='Search'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pokemon:
            <input type='text' className='btn btn-default' onChange={this.handleChange}/>
            <button type='submit' className='btn btn-danger'> Search </button>
          </label>
        </form>
        <span> {this.returnResults()} </span>
        </div>
    </div>
    );
  }
}
