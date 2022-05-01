import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/Home/Home";

function RoutingFile() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/"> About</Link>
        </div>

        <div>
          <Link to="/contact"> Contact</Link>
        </div>

        <div>
          <Link to="/home"> Home</Link>
        </div>
      </div>

      <Route exact path="/" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default RoutingFile;
