import React, { useState, useEffect } from "react";

import Axios from "axios";

const Fetching = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatData = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatData();
  }, []);

  // useEffect(() => {
  //   fetch("https://catfact.ninja/fact")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCatFact(data.fact)
  //     })
  // }, [

  // ])

  return (
    <div>
      <button onClick={fetchCatData}>Data</button>
      <p>{catFact}</p>
    </div>
  );
};

export default Fetching;
