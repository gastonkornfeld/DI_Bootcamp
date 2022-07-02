

import React, { Component } from 'react'

export default class Option extends Component {
    constructor() {
        super();
        this.state = {
          votes: 0,
        };
    }
    addvote = () => {
        this.setState(
            {
                votes:this.state.votes + 1
            }
        )
    }
  render(


    
  ) {
    return (
        <>
            <div>
                <h3>{this.props.name}</h3>
            </div>
            <div>
                <h4>{this.state.votes}</h4>
            </div>
            <div>
                <button onClick={this.addvote}>click to vote</button>  
            </div>
        </>
     
    )
  }
}
