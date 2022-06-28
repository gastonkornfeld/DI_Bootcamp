


import React, { Component } from 'react'
import './Exercise4.css';
export default class Exercise4 extends Component {
    
  render() {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
      <>
        <h1 style={{
            color: style_header.color,
            backgroundColor : style_header.backgroundColor,
            padding: style_header.padding,
            fontFamily: style_header.fontFamily
            }}
        >
            This is exercise 4
        </h1>
        <p className='para'> Exercise 4 paragraph</p>
        <a target='_blank' href='https://www.google.com/'>exercise 4 link to google</a>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Escudo_del_Club_Atl%C3%A9tico_Belgrano.svg/1200px-Escudo_del_Club_Atl%C3%A9tico_Belgrano.svg.png' className="App-logo" alt="logo" />
        <div>
            <form>
                <label id='name'>Name on exercise 4 form</label>
                <input id='name' type='text' value='starting with something'></input>
                <label id='age'>Age</label>
                <input type='number' value='9'></input>
            </form> 
        </div>
        <div>
            <ol>
                <li>Number one</li>
                <li>Number two</li>
                <li>Number three</li>
            </ol>
        </div>
       
        
      </>
    )
  }
}
