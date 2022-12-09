import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Header from "./Header";


const Routerdom = () => {
  const [userName, setUserName] = useState("roshan");
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home username={userName} />} />
          <Route
            path="/about"
            element={<About username={userName} setusername={setUserName} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerdom;
