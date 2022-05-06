import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor initializing the state");
    this.state = {
      name: "Hardik",
    };
  }

  shouldComponentUpdate() {
    console.log("3.Component should update");
    return true;
  }

  updateState = () => {
    console.log("at updating phase");
    this.setState({
      name: "Pandiya",
    });
  };

  render() {
    console.log("2. rendering the state");
    return (
      <div>
        <h1>Hello Mr.{this.state.name} </h1>
        <button onClick={this.updateState}>Change </button>
      </div>
    );
  }
  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("first")
  //   }
}

export default Update;
