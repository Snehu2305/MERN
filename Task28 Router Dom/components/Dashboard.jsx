import React from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = ({setIsLoggedIn}) => {

  const navigate = useNavigate()

  const handleLogout = () =>{
      setIsLoggedIn(false)

      navigate("/");
  }

  return (
    <div >
       <h1 className="text-3xl font-bold text-center text-pink-400 mt-10">Dashboard</h1>
       <p  className='text-center text-pink-300 m-5'>Welcome back !</p>
        <button className="text-pink-400 border border-pink-500 pl-1 pr-1 rounded-lg ml-110" onClick={handleLogout}>Logout</button> <br /> <br />
    </div>
  )
}

export default Dashboard