

import React, { Component } from 'react'
import data from '../data'

export default class Postlist extends Component {
  render() {
    const listItems = data.map((element) =>  
    <div key={element.id}>
        <h2>{element.title}</h2>
        <p>{element.content}</p>
        <p>{element.date}</p>
        <small>{element.slug}</small>
    </div>  
    );  
    return (
      <>
      <div>
        <h1>List items exercise</h1>
      </div>
      <div>
        {listItems}
      </div>
        
      </>
    )
  }
}
