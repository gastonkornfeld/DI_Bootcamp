

import React, { Component } from 'react'
import data from './data2.json'

export default class Exercise2 extends Component {
  render() {
    const listskillset = data.Skills[0].SkillSet.map((element) =>  
    <div>
        <p>{element.Name}</p>
    </div>  
    );
    const listskillset2 = data.Skills[1].SkillSet.map((element) =>  
    <div>
        <p>{element.Name}</p>
    </div>  
    );
    return (
        
      <>
        <h1>
            {data.Skills[0].Area}
        </h1>
        
        <p>{listskillset}</p>
        <h1>
            {data.Skills[1].Area}
        </h1>
        
        <p>{listskillset2}</p>

      </>
    )
  }
}
