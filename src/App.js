import React, { Component } from 'react';
import './App.css';
import data from './pokedex.js';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    var foo = data.filter(function(data) {
      return data.name === this.state.value;
    });
    console.log(foo.name);
    console.log(this.state.value);
    event.preventDefault();
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please enter a Pokemon:
            <input type='text' name='input' value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default Pokedex;
