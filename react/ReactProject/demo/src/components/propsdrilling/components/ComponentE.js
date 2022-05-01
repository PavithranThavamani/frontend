import React from "react";

function ComponentE(props) {
  return (
    <div>
      <h1>Getting value from A and Reached E</h1>
      <h1>{props.dName} </h1>
    </div>
  );
}

export default ComponentE;
