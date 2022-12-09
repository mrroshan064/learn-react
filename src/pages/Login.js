import React, { useState} from "react";
import { login, logout} from "../Store"
import { useDispatch, useSelector } from "react-redux";
const Login = () =>{
  const [userName, setUserName] = useState("")
  const dispatch = useDispatch();
  return (
    <div>
    {userName}
    <input type="text" onChange={(e) => { setUserName(e.target.value) }} />
      <button onClick={()=>{useDispatch()} }>Login</button>
    <button>Logout</button>
  </div>
  );
};

export default Login;
