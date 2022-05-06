import React, { Component } from "react";

class Mount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: "Mounting Phase",
    };
    console.log("Constructor Excecuted");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Excecuted");
    console.log(state);
  }

  componentDidMount() {
    console.log("componentDidMount method excecuted");
  }
  render() {
    console.log("render method excecuted");
    return <div>{this.state.txt} </div>;
  }
}

export default Mount;
