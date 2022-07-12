

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changePropInput2 } from './actions';
import { changePropInput } from './actions';

class Exampleredux extends Component {
    constructor() {
        super();
        this.state = {
            firstName: 'asdasd',
            lastName: 'asdasd',
            inputone: ''
        };
    }
    handleChange = (e) => {
        const target = e.target;
        console.log(target.value)
        const value = target.type === "checkbox" ? target.checked : target.value;
        console.log(value);
    
        this.setState({ [target.name]: value }, () => {
        });
    };
  render() {
    return (
      <div>
        <input onChange={this.handleChange} name='inputone'></input>
        <p>first {this.state.inputone}</p>
        <p>last {this.state.lastName}</p>
        <input onChange={this.props.aaa} name='inputone'></input>
        Calabaza<button onClick={this.props.bbb} name='inputone'>change state</button>
        <p>first {this.props.a}</p>
        <p>last {this.props.b}</p>
        <p>{this.props.c}</p>
        <p>Change with dispatch{this.props.aa}</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        a: state.hello,
        b:state.by,
        c: state.calabaza,
        aa:state.sayHello,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        aaa: (e) => dispatch(changePropInput2(e.target.value)),
        bbb: (e) => dispatch(changePropInput(e.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Exampleredux);
