import React from "react";

function Home(prop) {
  const changePage = () => {
    prop.history.push("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={changePage}>goToAboutPage</button>
    </div>
  );
}

export default Home;
