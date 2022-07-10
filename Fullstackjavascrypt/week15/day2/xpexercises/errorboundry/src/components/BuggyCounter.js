

import React, { Component } from 'react'

export default class BuggyCounter extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
    }
    handleClick = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }
  render() {
    if(this.state.count >= 5) {
        throw new Error('The app crashhhh');
    }
    return (
      <>
        <button onClick={this.handleClick}>ADD</button>
        <p>{this.state.count}</p>
      </>
    
    )
  }
}
