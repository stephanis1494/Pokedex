import React, { Component } from 'react';
import './Results.css';

export default class Results extends Component {
  render() {
    return (
      <div className='container'>
          <img src={this.props.image} />
          <h3 className='resultHeader'> {this.props.name} </h3>
          <p className='resultBody'>{this.props.name}, a {this.props.type} Pokemon. </p>
      </div>
    );
  }
}
