import React from "react";
import Contact from "./Contact";

const About = ({ username, setusername }) => {
  return (
    <div>
      {username}
      <Contact setUserName={setusername} />
    </div>
  );
};

export default About;
