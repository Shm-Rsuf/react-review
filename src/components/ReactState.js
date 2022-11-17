import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementHandler = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>counter : {count}</h2>
        <button onClick={this.incrementHandler} className="btn">
          +
        </button>
        <button
          onClick={this.decrementHandler}
          className="btn"
          disabled={count === 0 ? true : false}
        >
          -
        </button>
      </div>
    );
  }
}
