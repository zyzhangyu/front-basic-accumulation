import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {

    constructor(){
        super()
        console.log("~~~qqqq")
    }

  render() {
    console.log("12321321")
    const match = this.props.match;
    console.log(match.params);

    return (
      <div>
        <h2>Detail: {match.params.id}</h2>
      </div>
    )
  }
}
