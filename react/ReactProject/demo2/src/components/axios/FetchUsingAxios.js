import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchUsingAxios() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Fetch using AXIOS</h1>
      <ul>
        {photos.map((photo, index) => {
          return (
            <li key={index}>
              id : {photo.id} title : {photo.title} url : {photo.url}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchUsingAxios;
