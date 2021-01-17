import React from 'react';
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav'>
                <NavLink to='/main'>Main</NavLink>
            </div>
            <div className='nav'>
                <NavLink to='/publications'>Publications</NavLink>
            </div>
            <div className='nav'>
                <NavLink to='/photos'>Photos</NavLink>
            </div>
            <div className='nav'>
                <NavLink to='/contacts'>Contacts</NavLink>
            </div>

        </div>

)
}

export default Navbar;