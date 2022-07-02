


import React, { Component } from 'react'
import Garage from './Garage';

export default class Car extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
    };
  }
  render() {
    return (
        <>
            <header>
                <Garage size='small' />
                <h1>This is a {this.props.info.name} {this.props.info.model} color {this.state.color}</h1>
            </header>
        </>
      
    )
  }
}
