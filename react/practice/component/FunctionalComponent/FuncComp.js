function Header(props) {
  const { fName, lName } = props;
  return (
    <div>
      <h1>Functional Component - Header</h1>
      <h2>
        {" "}
        {fName} {lName}
      </h2>
    </div>
  );
}

function Content({ car1, car2, car3 }) {
  return (
    <div>
      <h1>Functional Component - Content</h1>
      <h1>
        {car1} {car2} {car3} {typeof car1}
      </h1>
    </div>
  );
}
//We cannot re-intialise the props
//It is read-only thing
// props is immutable
function Footer({ bikes }) {
  const { bike1, bike2 } = bikes;
  return (
    <div>
      <h1>Functional Component - Footer</h1>
      <h1>
        {bike1} {bike2} {bikes.bike3}{" "}
      </h1>{" "}
    </div>
  );
}

class FuncComp extends React.Component {
  state = {
    name: "Pavithran",
  };

  nameChanger = () => {
    this.setState({
      name: "Pavithran Thavamani",
    });
  };

  render() {
    return (
      <div>
        <h1>Using 'state'</h1>
        <h1>{this.state.name} </h1>
        <button onClick={this.nameChanger}> Change Name</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Header fName="Pavithran" lName="Thavamani" />,
    <Content car1="Audi" car2="Bugatti" car3="McLaren" />,
    <Footer bikes={{ bike1: "MT", bike2: "FZ", bike3: "R15" }} />
    <FuncComp />
  </div>,
  document.getElementById("root")
);
