import React from 'react';
import { TextField, Button, Box } from '@mui/material'

export default function User(props) {
    return (
        <div className='post-form'>
            <Box component='form' onSubmit={props.handleSubmit} sx={{
                display: 'flex',
                flexDirection: 'column',

            }}>
                <label> First Name</label> <br />

                <TextField error helperText="Required" type='text' label={`${props.userState.user.first_name}`} name='first_name' required></TextField>
                <br />

                <label> Username</label> <br />
                <TextField error helperText="Required" type='text' label={`${props.userState.user.username}`} name='username' required></TextField><br />

                <label>Email</label> <br />
                <TextField error helperText="Required" type='email' label={`${props.userState.user.email}`} name='email' required></TextField><br />

                <label>Password</label>
                <br />
                <TextField error helperText="Required" type='password' label='required! ' name='password' required></TextField> <br />

                <label> About </label>
                <br />

                <TextField multiline type='text' label={`${props.userState.user.about}`} name='about' />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <TextField type='submit' variant="outlined" size="small"></TextField> <TextField type='submit' value='Cancel' variant="outlined" size="small" onClick={props.handleCancel} className='Button color="error"'></TextField>
                </Box>
            </Box>
            <Button color="error" onClick={props.renderDelete}>
                Delete Account
            </Button>
        </div>
    )
}