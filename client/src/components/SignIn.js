import React from 'react';
import { Link } from 'react-router-dom'
import { TextField, Button, Box } from '@mui/material'

export default function SignIn(props) {
  return (
    <div className='flex-login'>
      <h6 className='join-title'>Welcome to Parasocialr</h6>
      <Box component='form' onSubmit={props.handleLogIn}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '75%',
          color: '#CEE5F1',
        }}
      >
        <TextField type='email' name='email' id="outlined-name" label="Email"></TextField>
        <TextField type='password' label="Password" name='password' id="outlined-password"></TextField>
        <Button type='submit' variant="outlined" size="small">Submit</Button>
      </Box>
      <div className='bottom-text'>
        Dont have an account?<Link to='/sign-up' className='link-login'> SignUp here</Link >
      </div>
    </div>
  )
}
