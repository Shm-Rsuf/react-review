import React, { Component } from "react";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true,
    };
  }

  render() {
    const { display } = this.state;
    return <div>{display ? <HomePage /> : <SignInPage />}</div>;
  }
}
export default ConditionalRender;
