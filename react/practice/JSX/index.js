const bikes = ["FZ", "MT", "R15"];

const bike = (
  <ul>
    {bikes.map((listItem, index) => {
      return <li key={index}>{listItem} </li>;
    })}
  </ul>
);

ReactDOM.render(bike, document.getElementById("root"));
