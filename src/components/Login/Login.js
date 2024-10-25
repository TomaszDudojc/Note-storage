import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import './Login.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return(
    <div>      
      <form className="form" onSubmit={handleSubmit}>
        <p className="note h1">Please Log In or Register</p>                
        <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required/> 
        <input type="password" name="name" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>       
        <button type="submit">Login</button>
      </form>
    </div>
  );
}