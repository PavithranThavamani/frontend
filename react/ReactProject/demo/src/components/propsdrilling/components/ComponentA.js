import React, { useState } from "react";
import ComponentB from "./ComponentB";

import { UserProvider } from "../context/Context";
import ComponentD from "./ComponentD";

function ComponentA() {
  const [userName, setuserName] = useState("pavi");
  return (
    <div>
      <h1>Passing from A </h1>
      <h1>{userName} </h1>
      <UserProvider userName={userName}>
        <ComponentD userName={userName} />
      </UserProvider>
      <button onClick={() => setuserName("mukilan")}>change</button>
    </div>
  );
}

export default ComponentA;
