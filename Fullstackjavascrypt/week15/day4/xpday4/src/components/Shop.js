


import React, { Component } from 'react'
import ErrorBoundry from './ErrorBoundry'
function Bomb() {
    throw new Error('this app has an error')
}
export default class Shop extends Component {
    
  render() {
    const error = true;

    return (
        <ErrorBoundry>
           {error ? <Bomb /> : null}
        </ErrorBoundry>
    )
  }
}
