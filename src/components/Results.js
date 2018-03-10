import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  render() {
    return (
      <div>
      <h3> {this.props.name} </h3>
      <p> {this.props.name}, a {this.props.type} Pokemon. </p>
    </div>
    );
  }
}
