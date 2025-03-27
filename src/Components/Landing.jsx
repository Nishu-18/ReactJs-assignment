import React from 'react'
import {Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='container'>
    <h1 className='heading'>Welcome to PopX</h1>
    <p className='sub'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <Link to="/signup">
    <button   className='custom-button'>Create Account</button>
    
    </Link>
   
    
  
    

    <Link to={"/login"}>
    <button className='secondary-button'>Already Registered? Login</button></Link>
   
    
    </div>
    
  )
}

export default Landing