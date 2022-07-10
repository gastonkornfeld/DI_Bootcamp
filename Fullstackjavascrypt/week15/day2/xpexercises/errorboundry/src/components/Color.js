

import React, { Component } from 'react'

import Child from './Child';

export default class Color extends Component {
    constructor() {
        super();
        this.state = {
            color: "Red",
            show: true,
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
    shouldComponentUpdate() {
        return true
    }
    componentDidUpdate(prevprops, prevState, snapshot) {
        // Typical usage (don't forget to compare props):
        console.log('first')
        if (this.state.color !== prevState.color) {
          return (
            <>
                <h1>my facourite color is is {this.state.color}</h1>
            </>
          )
        }
    }
    unmount = () => {
        this.setState({show: false})
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     if (this.state.color !== prevState.color) {
    //         return (
    //           <>
    //             <p>Before the update the color was {prevState.color}</p>
    //             <p>my facourite color is {this.state.color}</p>
    //           </>
    //         )
    //     }
    //     return null
    // }
  render() {
    let comp;
    if (this.state.show) {
      comp = <Child />;
    }
    return (
        <>
            {comp}
            <div style={{ margin: '10px'}}>My favourite color is {this.state.color} </div>
            <button onClick={this.changeColor}>Change color to blue</button>
            <button onClick={this.unmount}>unmount hello world</button>
        </>

    )
  }
}


