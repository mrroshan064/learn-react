import React, { useState } from "react";
import Axios from "axios";

const Fetchingdata = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>click Me</button>
      <p>Name:{data?.name}</p>
      <p>Age:{data?.age}</p>
      <p>Count:{data?.count}</p>
    </div>
  );
};

export default Fetchingdata;
