import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  return (
    <div>
      <h1>Passing from B </h1>
      <ComponentC bName={props.aName} />
    </div>
  );
}

export default ComponentB;
