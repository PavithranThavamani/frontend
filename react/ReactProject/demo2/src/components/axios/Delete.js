import axios from "axios";
import React, { useEffect } from "react";

function Delete() {
  const deleteData = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/photos/1")
      .then((res) => {
        console.log(res);

        console.log(`Deleted - ${res.status} `);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   useEffect(() => {
  //     deleteData();
  //   }, []);

  return (
    <div>
      <h1>DELETE</h1>
      <button onClick={deleteData}>DELETE </button>
    </div>
  );
}

export default Delete;
