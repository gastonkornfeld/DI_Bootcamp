

import React, { Component } from 'react'

export default class Garage extends Component {
  render() {
    return (
      <div className='app'>Who lives in my {this.props.size} Garage?</div>
    )
  }
}
