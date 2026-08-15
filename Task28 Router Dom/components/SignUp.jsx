import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () => {

  const navigate = useNavigate();

  function handleSignup(e){
    e.preventDefault();

    navigate("/login");
  }


  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-pink-400">Sign Up</h1>

        <div className="mt-10 ml-95">
                    <form onSubmit={handleSignup}>
                      <input className="border border-white text-white" type="text" placeholder="enter name" /> <br /> <br />
                      <input className="border border-white text-white" type="email" placeholder="enter email" /> <br /> <br />
                      <input className="border border-white text-white" type="password" placeholder="enter password" /> <br /><br />
                      <button className="text-pink-400 border border-pink-500 pl-1 pr-1 rounded-lg" type='submit'>Sign Up</button> <br /> <br />
                    </form>
                    <Link className="text-blue-300" to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default SignUp