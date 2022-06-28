


import React, { Component } from 'react'

export default class UserFavColors extends Component {
  render(props) {
    return (
        <>
            <div>UserFavColors</div>
            <p>{this.props.user.first_name}</p>
            {this.props.user.fav_animals.map((element,index) => {
                return <li>Favourite animal number {index+1} is {element}</li>
            })}
        </>
      
    )
  }
}
