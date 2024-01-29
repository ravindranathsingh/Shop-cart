import React from 'react'
import "../styles/Account.css"
import { Link } from "react-router-dom"

export function Account() {

  return (
    <div className='login-container'>
            <div className='login-form'>
                <input type='text' placeholder='Email address or phone number'/>
                <input type='password' placeholder='Password'/>
                <Link id='login-btn'>Log in</Link>
                <Link id='forgot-btn'>Forgotten password?</Link> <hr/>
                <button id='btn'>Create new account</button>
            </div>
    </div>
  )
}

export default Account