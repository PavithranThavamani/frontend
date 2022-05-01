import React from "react";
import "./formstyle.css";

function form() {
  const loginAlert = () => {
    window.alert("Login successfully");
  };

  return (
    <div className="container">
      <form className="form">
        <h1>Login</h1>
        <label>Name</label>
        <br></br>
        <input type="text" />
        <br></br>
        {/* <label>Gender</label>
        <br></br>
        <input type="radio" name="Gender" />
        Male
        <input type="radio" name="Gender" />
        Female
        <br />
        <br /> */}
        <label>Phone Number</label>
        <br></br>
        <input type="number" />
        <br></br>
        <label>Email</label>
        <br></br>
        <input type="email" />
        <br></br>
        <label>Password</label>
        <br></br>
        <input type="password" />
        <br></br>
        <input
          type="button"
          value="login"
          className="login-btn"
          onClick={() => {
            loginAlert();
          }}
        />
      </form>
    </div>
  );
}

export default form;
