import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      skill: "",
    };
  }

  firstNameHandler(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  lastNameHandler(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  selectHandler(e) {
    this.setState({
      skill: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.skill);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitHandler(e)}>
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input
            type="text"
            id="first-name"
            value={this.state.firstName}
            onChange={(e) => this.firstNameHandler(e)}
          />
        </div>

        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input
            type="text"
            id="last-name"
            value={this.state.lastName}
            onChange={(e) => this.lastNameHandler(e)}
          />
        </div>

        <div>
          <select
            value={this.state.skill}
            onChange={(e) => this.selectHandler(e)}
          >
            <option value="">Select your skill</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="hmtl">Html</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
