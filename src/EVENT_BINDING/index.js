import React, { Component } from "react";

class EVENT_BINDING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>counter : {counter}</h2>
        <button className="btn" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default EVENT_BINDING;
