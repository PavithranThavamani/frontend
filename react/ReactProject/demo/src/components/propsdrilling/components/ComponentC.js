import React from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  return (
    <div>
      <h1>Passing from C </h1>
      <ComponentD cName={props.bName} />
    </div>
  );
}

export default ComponentC;
