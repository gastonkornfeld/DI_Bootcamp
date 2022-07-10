
import React, { Component } from 'react'



export default class Child extends Component {
  componentWillUnmount() {
    alert('The component is going to be unmounted');
  };
  render() {
    return (
      <>
        <header>Hello world</header>
      </>
      
    )
  }
}

