import React from 'react'
import { TextField, Button, Box } from '@mui/material'

export default function NewPost(props) {
  return (
    <div className='post-form'>
        <Box component='form' onSubmit={props.handleLogIn}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          color: '#CEE5F1',
        }}>
            <TextField multiline type='text' placeholder='what are you thinking' name='content'></TextField>
            <TextField type='text' placeholder='image url' name='image'></TextField>
            <br/>
            <Button type='submit' variant="outlined" size="small">Submit</Button> <Button type='submit' variant="outlined" size="small" onClick={props.handleCancel}>Cancel</Button>
        </Box>
    </div>
  )
}
