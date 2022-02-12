import React from 'react'
import { Link } from 'react-router-dom'
import { div, Toolbar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';


const NavBar = () => {
    return (
        <div className='nav'>
            <nav className='nav'>
                <Link to='/'> Parasocialr </Link>
                <Link to='/profile'> <PersonIcon /> </Link>
            </nav>
        </div>
    )
}

export default NavBar