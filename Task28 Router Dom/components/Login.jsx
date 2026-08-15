import React from "react";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";


const Login = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    setIsLoggedIn(true);
    navigate("/dashboard");
  }





  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-pink-400">Login</h1>
        <div className="mt-10 ml-95">
            <form onSubmit={handleLogin}>
              <input className="border border-white text-white" type="email" placeholder="enter email" /> <br /> <br />
              <input className="border border-white text-white" type="password" placeholder="enter password" /> <br /><br />
              <button className="text-pink-400 border border-pink-500 pl-1 pr-1 rounded-lg" type="submit">Login</button> <br /> <br />
            </form>
            <Link className="text-blue-300" to='/signup'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Login