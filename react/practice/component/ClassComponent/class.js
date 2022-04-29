class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component - Header</h1>
        {/* <h1>Class Component - Body</h1> */}
        <h1>{this.props.name} </h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Content Component - Content</h1>
        <h1>{this.props.name} </h1>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>Footer Component - Footer</h1>
        <h1>{this.props.name} </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Header name="Pavithran" />
    <Content name="Surul" />
    <Footer name="Rajan" />{" "}
  </div>,
  document.getElementById("root")
);
