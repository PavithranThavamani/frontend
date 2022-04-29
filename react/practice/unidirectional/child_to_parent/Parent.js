class Parent extends React.Component {
  state = {
    text: "hello",
  };
  render() {
    return (
      <div>
        <h1>{this.state.text} </h1>
        <Child action={this.getDataFromChild.bind(this)} />
      </div>
    );
  }

  getDataFromChild(data) {
    console.log(data);
    this.setState({
      text: data,
    });
  }
}

function Child(props) {
  const str = "Welcome";
  return (
    <div>
      <button
        onClick={() => {
          props.action(str);
        }}
      >
        send from Parent to Child
      </button>
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
