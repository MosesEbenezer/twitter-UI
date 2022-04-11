import React, { useEffect, useState } from 'react';
import './Login.css';
import { Button } from "@material-ui/core"
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useToken} from '../useToken'


async function loginUser(credentials) {
  const response = await fetch('http://[::1]:3021/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  if(response.ok){
    const {data} = await response.json()
    return data
  }else{
    const error = await response.text();
    alert(error)
  }
}
 

function Login(props) {

  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const [token, setToken] = useState("")

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
   
    localStorage.setItem("token", token)
  }

  return (
    <div className='loginContainer'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='login_input'>
            <input placeholder='Input Email' type="text" onChange={e => setUserName(e.target.value)}/>
          <br/>
        </div>
        <div className='login_input'>
          <input placeholder='Input Password' type="text" onChange={e => setPassword(e.target.value)}/>
        </div>

        <Button type='submit' className='tweetBox__tweetButton'>Sign In</Button>
      </form>

      <span className='linkTextB'>Don't Have An Account?</span>
      <NavLink to="/"><span className='linkText'>Sign Up</span></NavLink>
       <span className='linkTextB'>Instead</span>
    </div>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;