function Parent({ typeOfVechicle, color }) {
  return (
    <div>
      <h1>Hello, we are gonna buy a {typeOfVechicle} </h1>
      <Child brand="Audi" model="R8" carColor={color} />
    </div>
  );
}

function Child(props) {
  const { brand, model, carColor } = props;
  return (
    <div>
      <h1>
        Congrats for your {carColor} {brand}-{model}{" "}
      </h1>
    </div>
  );
}

function Parent2({ brand, model, color, typeOfVechicle }) {
  return (
    <div>
      <h1>Hello, we are gonna buy {typeOfVechicle} </h1>
      <Child2 brand={brand} model={model} color={color} />
    </div>
  );
}

function Child2(props) {
  const { brand, color, model } = props;
  return (
    <div>
      <h1>
        Congrats for your {color} {brand}-{model}{" "}
      </h1>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Parent typeOfVechicle="car" color="Red" />
    <Parent2
      typeOfVechicle="bike"
      brand="Yamaha"
      model="FZ"
      color="royal blue"
    />
  </div>,
  document.getElementById("root")
);
