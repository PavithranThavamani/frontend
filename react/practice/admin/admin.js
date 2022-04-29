class Admin extends React.Component {
  state = {
    adminName: "pavithran",
  };

  render() {
    // const adminName = "pavithran";
    if (this.state.adminName == this.props.uName) {
      return (
        <div>
          <h1>Admin Login </h1>
          <h1> Home</h1>
          <h1> {this.state.adminName}</h1>
        </div>
      );
    } else {
      return <NotAdmin userName={this.props.uName} />;
      //   return <NotAdmin />;
    }
  }
}

function NotAdmin(props) {
  return (
    <div>
      <h1>Login</h1>
      <h1>{props.userName} </h1>
    </div>
  );
}

ReactDOM.render(<Admin uName="pavithran" />, document.getElementById("root"));
