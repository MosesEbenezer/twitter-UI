import React, { useState } from 'react';
import './Login.css';
import { Button } from "@material-ui/core"
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  // alert(JSON.stringify(credentials))
  return fetch('http://[::1]:3021/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
    // .catch(err => alert(err))
 }

function Login({ setToken }) {

  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;