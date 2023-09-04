import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
let Nav = () => {
    const [display, setDisplay] = useState('none')
    function handale() {
        if (display === 'none') {
            setDisplay('inline-block')
        }
        else {
            setDisplay('none')
        }
    }
    return (
        <div className="navbar">
            <ul>
                <li className='home'>
                    <Link id='Hom' className='ch' to='/'>Home</Link>
                </li>
                <li className='search'><input type="text" name='search' placeholder='Search aricals' id='searching' /></li>
                <li className='searchButton'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                <li className='tripleDot' onClick={handale} ><FontAwesomeIcon icon={faBars} /></li>
            </ul>
            <div className="float" style={{ display: display }}>
                <div className="add">
                    <Link to='/add' id='Ad' className='ch' > Add artical</Link>

                </div>
                <div className="Edit">
                    Edit Profile
                </div>
            </div>
        </div>
    )
}
export default Nav