

import React, { Component } from 'react'
import ErrorBoundry from './ErrorBoundry'

export default class Profile extends Component {
  render() {
    return (
        <ErrorBoundry>
            <h2>Profile</h2>
            <p>This is the Profile page</p>
        </ErrorBoundry>
    )
  }
}
