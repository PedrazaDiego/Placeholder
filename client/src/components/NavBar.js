import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';


const NavBar = () => {
    return (
        <div>
            <nav  className='nav'>
                <Link to='/' className='link-login'> Parasocialr </Link>
                <Link to='/profile'> <PersonIcon /> </Link>
            </nav>
        </div>
    )
}

export default NavBar