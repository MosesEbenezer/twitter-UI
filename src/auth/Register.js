import React from 'react';
import './Register.css';
import { Button } from "@material-ui/core"
import { NavLink } from 'react-router-dom';


function Register() {
  return (
    <div className='registerContainer'>
      <h2>Register</h2>
      <form>
        <div className='register_input'>
            <input placeholder='Input Email' type="text"/>
          <br/>
        </div>
        <div className='register_input'>
          <input placeholder='Input Password' type="text"/>
        </div>
        <Button className='tweetBox__tweetButton'>Sign Up</Button>
      </form>

      <span className='linkTextB'>Already Registered? </span>
      <NavLink to="/login"><span className='linkText'>Sign In</span></NavLink>
       <span className='linkTextB'>Instead</span>
    </div>
    
  )
}

export default Register;