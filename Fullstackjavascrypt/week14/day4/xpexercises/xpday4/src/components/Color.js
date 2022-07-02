

import React, { Component } from 'react'

export default class Color extends Component {
    constructor() {
        super();
        this.state = {
            color: "Red",
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {
                    color: 'yellow'
                }
            )
        }, 5000); 
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
            <div style={{ margin: '10px'}}>My favourite color is {this.state.color} </div>
            <button onClick={this.changeColor}>Change color to blue</button>
        </>

    )
  }
}
