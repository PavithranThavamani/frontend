import React, { useEffect, useState } from "react";

function FetchData() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      });
  };

  return (
    <div>
      <h1>Fetch Data from API</h1>
      <ul>
        {posts.map((post, index) => {
          console.log(post);
          return (
            <li key={index}>
              id : {post.id} title : {post.title}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FetchData;
