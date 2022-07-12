

import React, { Component } from 'react'
import data from './data2.json'
const lexperiencies = data.Experiences.map((element) =>  
    <div>
        <div>
           <img alt='logo' src={element.logo}></img> 
        </div>
        <div>
           <a href={element.url}>{element.companyName}</a>
            <p>{element.roles[0].title}</p>
            <p>{element.roles[0].description}</p>
            <p>{element.roles[0].startDate}</p>
            <p>{element.roles[0].endDate}</p>
            <p>{element.roles[0].location}</p> 
        </div>
        
    </div>  
    );

export default class Exercise3 extends Component {
  render() {
    return (
      <>
        {lexperiencies}

      </>
    )
  }
}
