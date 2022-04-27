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

ReactDOM.render(
  <Header fName="Pavithran" lName="Thavamani" />,
  document.getElementById("root")
);
