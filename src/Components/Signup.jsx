import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
        <div className='container'>
            <h1 className='heading2'>Create your PopX account</h1>
            <div className='label-container'>
                <label className='label2'>Full Name<span className='star'>*</span></label>
            </div>
            <input className='input-signup'></input>

            <div className='label-container'>
                <label className='label2'>Phone Number<span className='star'>*</span></label>
            </div>
            <input className='input-signup' type='tel'></input>

            <div className='label-container'>
                <label className='label2'>Email Address<span className='star'>*</span></label>
            </div>
            <input className='input-signup' type='email'></input>

            <div className='label-container'>
                <label className='label2'>Password<span className='star'>*</span></label>
            </div>
            <input className='input-signup' type='password'></input>

            <div className='label-container2'>
                <label className='lebel2' >Company Name</label>
            </div>
            <input id="mgb-18" className='input-signup' type='input'></input>
           <h1 className='agency'>Are you an Agency?<span className='star'>*</span></h1>
    
           <div class="radio-group">
  <label class="radio-label">
    <input type="radio"  />
    <span class="custom-radio"></span><h1 className='radio-label2'>Yes</h1>
  </label>
  <label class="radio-label">
    <input type="radio" />
    <span class="custom-radio"></span><h1 className='radio-label2'>No</h1>
  </label>
  
 
</div>
<Link to={"/profile"}> <button className='signup-button'>Create Account</button></Link>


           
        </div>
  )
}

export default Signup