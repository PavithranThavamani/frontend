import React from "react";
import ComponentE from "./ComponentE";
import { consumer } from "../context/Context";

function ComponentD(props) {
  return (
    <div>
      <h1>Passing from D </h1>
      <h1>{props.userName} </h1>
      {/* <consumer> */}
      {/* <h1>{props.data}</h1> */}
      {/* {(data) => {
          return <h2>{data} </h2>;
        }} */}
      {/* </consumer> */}
      <ComponentE dName={props.cName} />
    </div>
  );
}

export default ComponentD;
