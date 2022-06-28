import React, { Component } from "react";

type ConterProps = {
  message: string;
};
type CounterState = {
  count: number;
};

export default class Couter extends Component<ConterProps, CounterState> {
  state = {
    count: 0,
  };
  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}
