const element = React.createElement("h1", null, "Hello Guys!!!!!");
// ReactDOM.render(element, document.getElementById("root"));

const list = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "car"),
  React.createElement("li", null, "model"),
  React.createElement("li", null, "bugatti"),
  React.createElement("li", null, "McLaren")
);
// ReactDOM.render(list, document.getElementById("root2"));

const cars = ["Audi", "Bugatti", "McLaren", "Koeinsegg", "Lamborgini"];

const car = React.createElement(
  "ul",
  null,
  cars.map((listItem, index) => {
    return React.createElement("li", { key: index }, listItem);
  })
);

ReactDOM.render(car, document.getElementById("root"));
