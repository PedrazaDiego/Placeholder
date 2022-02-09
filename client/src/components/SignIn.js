import React from 'react';
import { Link } from 'react-router-dom'

export default function SignIn(props) {
  return (
    <div>
      <form onSubmit={props.handleLogIn}>
        <input type='email' placeholder='email' name='email'></input>
        <input type='password' placeholder='password' name='password'></input>
        <input type='submit'></input>
      </form>
      <div>
        Dont have an account? SignUp <Link to='/sign-up'>here</Link>
      </div>
    </div>
  )
}
