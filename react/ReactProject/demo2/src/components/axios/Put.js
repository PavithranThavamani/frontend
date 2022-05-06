import axios from "axios";
import React, { useEffect, useState } from "react";

function Put() {
  const [data, setData] = useState([]);

  const putData = () => {
    setData({
      name: "pavithran",
      id: "1",
    });
  };

  useEffect(() => {
    axios
      .put("https://jsonplaceholder.typicode.com/photos/1", data)
      .then((res) => {
        console.log(res);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [putData]);

  return (
    <div>
      <h1>Put Data</h1>
      {data.id}
      <br></br>
      {data.name}
      <br></br>
      <button onClick={putData}>PUT</button>
    </div>
  );
}

export default Put;
