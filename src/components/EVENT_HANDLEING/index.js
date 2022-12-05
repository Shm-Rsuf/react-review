import React, { Component } from "react";

class EVENT_HANDLEING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }

  changeHandler = (e) => {
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        console.log(this.state.changeValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeHandler} />
        <p>{this.state.changeValue}</p>
      </div>
    );
  }
}
export default EVENT_HANDLEING;
