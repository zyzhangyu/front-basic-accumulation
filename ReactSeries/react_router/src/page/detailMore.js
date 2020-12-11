import React, { PureComponent } from 'react'

export default class DetailMore extends PureComponent {

    constructor(){
        super()
        console.log("~~~123000")
    }

  render() {
    console.log("12321321")
    console.log(this.props.location);

    return (
      <div>
        <h2>DetailMore: {this.props.location.search}</h2>
      </div>
    )
  }
}
