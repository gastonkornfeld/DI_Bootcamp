

import React, { Component } from 'react'
import ErrorBoundry from './ErrorBoundry'
import Postlist from './Postlist'
import Exercise1 from './Exercise1'
import Exercise2 from './Exercise2'
import Exercise3 from './Exercise3'


export default class Home extends Component {
  render() {
    return (
        <ErrorBoundry>
          <header>Home</header>
          <p>This is the home page</p>
          <div>
            <Postlist />
          </div>
          <div>
            <h2>Exercise 3 part 1</h2>
            <Exercise1 />
          </div>
          <div>
            <h2>Exercise 3 part 2</h2>
            <Exercise2 />
          </div>
          <div>
            <h2>Exercise 3 part 3</h2>
            <Exercise3 />
          </div>
           
        </ErrorBoundry>
      
    )
  }
}
