import React from 'react';

export default function SignIn(props) {
  return (
    <div>
      <form onSubmit={props.handleLogIn}>
        <input type='email' placeholder='email' name='username'></input>
        <input type='password' placeholder='password' name='password'></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}
