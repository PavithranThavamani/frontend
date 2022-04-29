function UseStateObject() {
  const [name, setName] = React.useState({ fname: "Tony", lName: "Start" });

  const nameChanger = () => {
    console.log(name);
    setName({
      ...name,
      fname: "Howard",
    });
  };
  return (
    <div>
      <h1>{name.fname} </h1>
      <h1>{name.lName} </h1>
      <button onClick={nameChanger}>Change</button>
    </div>
  );
}

ReactDOM.render(<UseStateObject />, document.getElementById("root"));
