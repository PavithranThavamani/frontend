import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const name = useRef(null);

  useEffect(() => {
    name.current.focus();
  }, []);

  return (
    <div>
      <label>Name : </label>
      <input ref={name} type="text" />
    </div>
  );
}

export default UseRefHook;
