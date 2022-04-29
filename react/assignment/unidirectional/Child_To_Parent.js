class Parent extends React.Component {
  state = {
    fName: "Randy",
    lName: "Orton",
  };

  render() {
    const { fName, lName } = this.state;
    return (
      <div>
        <h1> From Class Component</h1>
        <h2>
          {fName} {lName}{" "}
        </h2>
        <Child action={this.changeFirstName.bind(this)} />
      </div>
    );
  }

  changeFirstName(newName, newLastName) {
    console.log(newName);
    console.log(newLastName);
    this.setState({
      fName: newName,
      lName: newLastName,
    });
  }
}

function Child(props) {
  const newName = "john";
  const newLastName = "Cena";
  return (
    <div>
      <h1>Functional Component</h1>
      <button
        onClick={() => {
          props.action(newName, newLastName);
        }}
      >
        Change Name
      </button>
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
