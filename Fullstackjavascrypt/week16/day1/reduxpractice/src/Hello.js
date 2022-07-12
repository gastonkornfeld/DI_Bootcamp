




import React, { Component } from 'react'
import { connect } from 'react-redux';

class Hello extends Component {
    constructor() {
        super();
        this.state = {
            firstName: 'from hello',
            lastName: 'second from hello',
        };
    }
  render() {
    return (
      <div>
        <p>first {this.state.firstName}</p>
        <p>last {this.state.lastName}</p>
        <p>first dispatch {this.props.a}</p>
        <p>last {this.props.b}</p>
        <p>Here goes the input when click button{this.props.c}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        a: state.sayHello,
        b: state.by,
        c: state.calabaza,
    }

}
export default connect(mapStateToProps)(Hello);
