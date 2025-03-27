import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container'>
        <h1 className='heading2'>Signin to your PopX account</h1>
        <h1 className='sub'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        
        <div className='label-container'>
        <label for="email">Email Address</label>
        </div>
        <input className='input-login' type="email" id="email" placeholder="Enter email address" />

        <div className='label-container'>
        <label for="email">Password</label>
        </div>
        <input className='input-login' type="email" id="email" placeholder="Enter password" />
        <Link to={"/profile"}>
        <button className='login-button'>Login</button>
        </Link>
        
    </div>
  )
}

export default Login