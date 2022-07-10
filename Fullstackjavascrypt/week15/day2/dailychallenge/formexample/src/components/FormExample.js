

import React, { Component } from 'react';
import styled from 'styled-components';

export default class FormExample extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination:'',
            restrictions:'',
            nuts: '',
            lactose:'',
            vegan:'',
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
        <>
            <FormContainer>
                <div className='first'>
                    <input name='firstName' onChange={this.handleChange} placeholder='First Name' type='text'></input>
                    <input name='lastName' onChange={this.handleChange} placeholder='Last Name' type='text'></input>
                    <input onChange={this.handleChange} name='age' placeholder='Age' type='number' max='120'></input>
                </div>
                <div>
                    <div>
                        <input onChange={this.handleChange} type="radio" value="Male" id='male' name="gender" />
                        <label for='male'>Male</label>
                    </div>
                    <div>
                        <input onChange={this.handleChange} id='female' type="radio" value="Female" name="gender" />
                        <label for='female'>female</label>
                    </div>
                    <div>
                        <input onChange={this.handleChange} id='other' type="radio" value="Other" name="gender" />
                        <label for='other'>other</label>
                    </div>
                </div>
                <div>
                    <p>Destination</p>
                    <select onChange={this.handleChange} name="destination" id="destination">
                        <option value="Paris">Paris</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Hong kong">Hong Kong</option>
                        <option value="Tel Aviv">Tel Aviv</option>
                    </select>
                </div>
                <div>
                    <h2>Dietary restrictions</h2>
                    <div>
                        <input onChange={this.handleChange} type="checkbox" value="nuts"  name="nuts" />
                        <label for='nuts'>Nuts</label>
                    </div>
                    <div>
                        <input onChange={this.handleChange} type="checkbox" value="lactose"  name="lactose" />
                        <label for='lactose'>Lactose free</label>
                    </div>
                    <div>
                        <input onChange={this.handleChange} type="checkbox" value="vegan" name="vegan" />
                        <label for='vegan'>Vegan</label>
                    </div>
                </div>

            </FormContainer>
            <FormResults>
                <h2>Entered Information</h2>
                <p>First name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Age : {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Destination : {this.state.destination}</p>
                <h4>Retrictions</h4>
                <p>Nuts free: {this.state.nuts?'yes':'no'}</p>
                <p>Lactose free: {this.state.lactose?'yes':'no'}</p>
                <p>Vegan: {this.state.vegan?'yes':'no'}</p>
            </FormResults>
           
            
      </>
    )
  }
}


const FormContainer = styled.div`
    width: 100%;
    background-color: orange;
`;

const FormResults = styled.div`
    width: 100%;
    background-color: green;
`;