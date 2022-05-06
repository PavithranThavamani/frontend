import axios from "axios";
import React, { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     const submitHandler = (e) => {
  //       e.preventDefault();
  //       console.log(this.data);
  //       axios
  //         .post("https://jsonplaceholder.typicode.com/photos")
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => console.log(err));
  //     };
  //   }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    console.log();
    axios
      .post("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={name}
          //   onChange={this.changeHandler}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="Submit"> Submit</button>
      </form>
    </div>
  );
}

export default Form;
