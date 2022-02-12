import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'


const NavBar = () => {
    return (
        <AppBar >
            <Toolbar>
                <nav className='nav'>
                    <Link to='/'> Landing </Link>
                    <Link to='/profile'> Profile </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar