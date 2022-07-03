

import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            one:0,
            two:0,
            total: '',
            operation: '+',
        };
    }
    changeOne = (e) => {
        this.setState(
            {
                one: Number(e.target.value)
            }
        )
    }
    changeTwo = (e) => {
        this.setState(
            {
                two: Number(e.target.value)
            }
        )
    }
    changeOperation = (e) => {
        this.setState(
            {
                operation: e.target.value
            }
        )
    }
    calculate = () => {
        switch (this.state.operation) {
            case 'add':
                this.setState(
                    {
                        total:this.state.one + this.state.two
                    }
                )
                break;
            case 'substract':
                this.setState(
                    {
                        total:this.state.one - this.state.two
                    }
                )
                break;
            case 'multiply':
                this.setState(
                    {
                        total:this.state.one * this.state.two
                    }
                )
                break;
            case 'divide':
                this.setState(
                    {
                        total:this.state.one / this.state.two
                    }
                )
                break;
            default:
                this.setState(
                    {
                        total:this.state.one + this.state.two
                    }
                )
                break;
        }
    }
  render() {
    return (
      <>
        <h1>Simple calculator</h1>
        <p>Choose two numbers and the operation</p>
        <div>
            <label for='numberone' name='one'>First Number</label>
            <input onChange={this.changeOne} type='number' id='one'></input>  
        </div>
        <div>
            <label for='numbertwo' name='two'>Second Number</label>
            <input onChange={this.changeTwo} type='number' id='two'></input>  
        </div>
        
        <button onClick={this.calculate}>Calculate</button>
        <select onChange={this.changeOperation} name="operation" id="operation">
            <option value="add">add</option>
            <option value="substract">substract</option>
            <option value="multiply">multiply</option>
            <option value="divide">divide</option>
        </select>
        <div style={{backgroundColor: 'red'}}>Total: {this.state.total}</div>
        
      </>
    )
  }
}
