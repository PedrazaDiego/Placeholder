import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div >
            <nav className='nav'>
                <Link to='/'> Landing </Link>
                <Link to='/profile'> Profile </Link>
            </nav>
        </div>
    )
}

export default NavBar