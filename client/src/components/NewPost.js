import React from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

export default function NewPost(props) {
  return (
    <div className='post-form'>
        <Box component='form' onSubmit={props.handlePost}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
            <TextField multiline type='text' placeholder='what are you thinking' name='content'></TextField>
            <TextField type='text' placeholder='image url' name='image'></TextField>
            <br/>
            <Button type='submit' variant="outlined" size="small">Submit</Button> <Button type='submit' variant="outlined" size="small" onClick={props.handleCancel}>Cancel</Button>
        </Box>
    </div>
  )
}
