import React from "react";
import { getMembers } from "../api/slack";

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    getMembers(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Token-area">
        <form onSubmit={this.handleSubmit}>
          <span>Enter your token:</span>
          <input
            type="text"
            placeholder="Enter your token here"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Token;
