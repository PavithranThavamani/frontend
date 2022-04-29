class CheckAdmin extends React.Component {
  state = {
    adminName: "Admin ",
    Login: "Admin",
    Home: "Home",
    boolean: "true",
  };

  render() {
    const { adminName } = this.state;

    return (
      <div>
        <h1>{adminName} </h1>
        {/* <h1>{Login} </h1>
        <h1>{Home} </h1> */}
        {this.check()}
        <button onClick={() => this.changeBoolean()}>Change</button>
      </div>
    );
  }

  check() {
    console.log("ok");
    if (this.state.boolean) {
      return (
        <div>
          {/* <h1>adminName </h1> */}
          <h1>Login </h1>
          <h1>Home </h1>
        </div>
      );
    } else {
      return <h1>Login user</h1>;
    }
  }

  changeBoolean() {
    const { boolean } = this.state;
    if (boolean) {
      console.log(boolean);
      this.setState({
        adminName: this.props.userName,
        boolean: false,
      });
    } else {
      console.log(boolean);
      this.setState({
        adminName: this.state.Login,
        boolean: true,
      });
    }
  }

  //   changeContentHandler() {
  //     console.log(this.state.count);
  //     if (this.state.count % 2 == 0) {
  //       this.setState({
  //         adminName: "User Name",
  //         Login: "Login",
  //         Home: "",
  //         count: count + 1,
  //       });
  //       this.state.count + 1;
  //     } else {
  //       this.setState({
  //         adminName: "Admin Name",
  //         Login: "Login",
  //         Home: "Home",
  //       });
  //       this.state.count + 1;
  //     }
  //   }
}

ReactDOM.render(
  <CheckAdmin userName="Pavi" />,
  document.getElementById("root")
);
