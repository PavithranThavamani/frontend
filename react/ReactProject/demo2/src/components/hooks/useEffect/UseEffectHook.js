import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [Count, setCount] = useState(0);
  //   const [name, setName] = useState();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${Count} times `;
    setTimeout(() => {
      setNumber((number) => number + 1);
    }, 1000);
  }, [Count]);

  return (
    <div>
      <h1>I've rendered {number} times!</h1>
      <h1>Counted {Count} times </h1>
      <button onClick={() => setCount(Count + 1)}>Clicked {Count} times</button>
    </div>
  );
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(() => count + 1);
  //     }, 1000);
  //   }); // <- add empty brackets here

  //   return (
  //     <div>
  //       <h1>I've rendered {count} times!</h1>
  //       <h1>Im rendering</h1>
  //       <button>Clicked {count} times </button>
  //     </div>
  //   );
}

export default UseEffectHook;
