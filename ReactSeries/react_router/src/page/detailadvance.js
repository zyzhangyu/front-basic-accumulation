import React, { PureComponent } from 'react'

export default class DetailAdvance extends PureComponent {

    constructor(){
        super()
        console.log("~~~123000")
    }

  render() {
    console.log("12321321")
    console.log(this.props.location);

    return (
      <div>
        <h2>DetailAdvance: {this.props.location.search}</h2>

        <h2>DetailAdvance: {this.props.location.state.toString()}</h2>

      </div>
    )
  }
}
