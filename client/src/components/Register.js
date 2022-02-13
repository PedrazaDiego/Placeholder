import React from 'react';
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

export default function Register(props) {
  return (
    <div className='flex-login'>
      <h6 className='join-title'>Join Parasocialr</h6>
      <Box component='form' onSubmit={props.handleRegister}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '75%',
          color: '#CEE5F1',
        }}>
        <TextField type='email' name='email' id="outlined-name" label="Email" size="normal"></TextField>
        <TextField type='text' name='username' id="outlined-username" label="Username"></TextField>
        <TextField type='password' label="Password" name='password' id="outlined-password"></TextField>
        <Button type='submit' variant="outlined" size="small">Submit</Button>
      </Box>
      <div className='bottom-text'>
        Already have an account?<Link to='/' className='link-login'> SignIn here</Link>
      </div>
    </div>
  )
}