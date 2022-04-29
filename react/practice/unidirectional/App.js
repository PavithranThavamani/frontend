// import index from "../unidirectional/Index";

function App(props) {
  return (
    <div>
      <Index appName="Hotstar" userName={props.user} />
    </div>
  );
}

function Index(props) {
  return (
    <div>
      <h1>{props.appName} </h1>
      <h1>{props.userName} </h1>
    </div>
  );
}

ReactDOM.render(<App user="Tony" />, document.getElementById("root"));
