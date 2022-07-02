


import React, { Component } from 'react'

export default class Phone extends Component {
    constructor() {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    changeColor = () => {
      this.setState(
          {
            color: 'blue',   
          }
          
      )
    }
  render() {
    return (
      <>
        <h3>Phone propertyes</h3>
        <p>This is a {this.state.brand} {this.state.model} color {this.state.color} from year {this.state.year}</p>
        <button onClick={this.changeColor}>Change color</button>
      </>
    )
  }
}
