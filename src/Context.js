import React, { useState, createContext } from "react";
import Home from "./Home";
import Profile from "./Profile";
import Services from "./Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AppContext = createContext();
const Context = () => {
  const [userName, setUserName] = useState("FutureTech");

  return (
    <div>
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default Context;
