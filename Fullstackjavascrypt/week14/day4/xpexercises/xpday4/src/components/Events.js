

import { Button } from '@material-ui/core'
import React, { Component } from 'react'

export default class Events extends Component {
    constructor() {
        super();
        this.state = {
            isToggleOn : "true",
        };
    }
    
  render() {
    return (
        <>
           <button onClick={this.props.click}>Click me</button>
           <div>
                <label for='name'>Press enter</label>
                <input onKeyPress={this.props.enter} id='name' type='text'></input> 
           </div>
           <div>
                <button
                    onClick={this.props.changeButton}
                >
                    Exercise 3 button is {this.props.butonIs?'On':'off'}
                </button>
           </div>
           
        </>
      
    )
  }
}
