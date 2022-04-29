const e1 = React.createElement("h1", null, "Hello world");
// ReactDOM.render(e1, document.getElementById("root"));

const e2 = React.createElement(
  "h1",
  { style: { color: "green" } },
  "Hello Hulk"
);
// ReactDOM.render(e2, document.getElementById("root"));

const avengers = ["Iron Man", "Captain America", "Thor", "Black Widow"];

const avengerList = React.createElement(
  "ul",
  { style: { color: "red" } },
  avengers.map((avenger, index) => {
    return React.createElement("li", { key: index }, avenger);
  })
);

// ReactDOM.render(avengerList, document.getElementById("root"));

const dcHeroes = ["Superman", "Batman", "WonderWoman", "Aquaman", "Flash"];

const dcHeroesList = React.createElement(
  "ul",
  { style: { color: "blue" } },
  dcHeroes.map((hero, index) => {
    return React.createElement("li", { key: index }, hero);
  })
);
// ReactDOM.render(dcHeroesList, document.getElementById("root"));

const laptopList = ["Dell", "MSI", "Lenovo", "Mac"];

const laptopItem = (
  <ul>
    {laptopList.map((laptop, index) => {
      return <li key={index}>{laptop} </li>;
    })}
  </ul>
);
ReactDOM.render(laptopItem, document.getElementById("root"));
