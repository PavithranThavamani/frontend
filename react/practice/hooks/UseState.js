function UseState() {
  const [name, setName] = React.useState("Super Man");

  //method 1
  const nameChanger = () => {
    console.log(name);
    setName("Iron Man");
  };

  //method 2
  const nameChanger2 = (newName) => {
    console.log(name);
    setName(newName);
  };

  return (
    <div>
      <h1>{name} </h1>
      <button onClick={nameChanger}>Iron Man</button>
      <button onClick={() => nameChanger2("Spider Man")}>Spider Man</button>
      {/* method 3 */}
      <button onClick={() => setName("Bat Man")}>Bat Man</button>
    </div>
  );
}

ReactDOM.render(<UseState />, document.getElementById("root"));
