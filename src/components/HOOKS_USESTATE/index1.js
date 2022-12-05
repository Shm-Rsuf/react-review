import React, { Component } from "react";

class HOOKS_USESTATE1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  buttonHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>counter : {count}</h3>
        <button className="btn" onClick={this.buttonHandler}>
          +
        </button>
      </div>
    );
  }
}
export default HOOKS_USESTATE1;
