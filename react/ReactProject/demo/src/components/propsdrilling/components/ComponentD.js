import React from "react";
import ComponentE from "./ComponentE";
import { UserConsumer } from "../context/Context";

function ComponentD(props) {
  return (
    <div>
      <h1>Passing from D </h1>
      <h1>{props.userName} </h1>
      {/* <UserConsumer> */}
      {/* <h1>{props.data}</h1> */}
      {/* {(data) => {
          return <h2>{data} </h2>;
        }} */}
      {/* </UserConsumer> */}
      <ComponentE dName={props.cName} />
    </div>
  );
}

export default ComponentD;
