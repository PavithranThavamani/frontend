import React, { useState } from "react";
import ComponentB from "./ComponentB";

import { Uprovider } from "../context/Context";
import ComponentD from "./ComponentD";

function ComponentA() {
  const [userName, setuserName] = useState("pavi");
  return (
    <div>
      <h1>Passing from A </h1>
      <h1>{userName} </h1>
      <Uprovider userName={userName}>
        <ComponentD userName={userName} />
      </Uprovider>
      <button onClick={() => setuserName("mukilan")}>change</button>
    </div>
  );
}

export default ComponentA;
