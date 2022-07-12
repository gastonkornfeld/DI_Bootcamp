

import React, { Component } from 'react'
import data from './data2.json'

export default class Exercise1 extends Component {
  render() {
    const listmedia = data.SocialMedias.map((element) =>  
    <div>
        <p>{element}</p>
    </div>  
    );
    return (
        
      <>
        {listmedia}
      </>
    )
  }
}
