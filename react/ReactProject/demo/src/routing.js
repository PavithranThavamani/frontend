import { BrowserRouter, Link, Route } from "react-router-dom";
import About from "./components/about/About";

const routing = (
  <BrowserRouter>
    <div>
      <div>
        <Link to="/"> About</Link>
      </div>
      <div>
        <Route path="/" component={About} />
      </div>
    </div>
  </BrowserRouter>
);

// import React from "react";

// function routing() {
//   return (
//     <BrowserRouter>
//       <div>
//         <div>
//           <Link to="/"> About</Link>
//         </div>
//         <div>
//           <Route path="/" component={About} />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

export default routing;
