import React from 'react';
import { Link } from 'react-router-dom'

export default function Register(props) {
  return (
    <div>
        <form onSubmit={props.handleRegister}>
            <input type='email' placeholder='email' name='email'></input>
            <input type='text' placeholder='username' name='username'></input>
            <input type='password' placeholder='password' name='password'></input>
            <input type='submit'></input>
        </form>
        <div>
            Already have an account? SignIn <Link to='/'>here</Link>
        </div>
    </div>
  )
}