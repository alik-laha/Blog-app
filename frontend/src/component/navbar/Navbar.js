import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import HandleFetch from '../../utils/handleFetch'
import './Navbar.css'

let Nav = (props) => {
    const [display, setDisplay] = useState('none')
    function handale() {
        if (display === 'none') {
            setDisplay('inline-block')
        }
        else {
            setDisplay('none')
        }
    }


    //need to display searched element in Body
    const handleCh = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await HandleFetch(`/api/v1/artical/${key}`);
            //sending data to perent component
            props.onchange(result.data);
        }
        else {
            console.log('nodata')
        }
    }

    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/sign-up')
    }

    const auth=localStorage.getItem('user');
    return (
        <div className="whole">
            <div className="navbar">
                <ul>
                    <li id='home'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='search' ><input type="text" name='search' placeholder='Search aricals' id='searching' onChange={handleCh} /></li>
                    <li className='searchButton'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                    <li className='tripleDot' onClick={handale} ><FontAwesomeIcon icon={faBars} /></li>
                </ul>
                <div className="float" style={{ display: display }}>
                    <div id="add">
                        <NavLink to='/add' > Add artical</NavLink>
                    </div>
                    <div className="Edit">
                        Edit Profile
                    </div>
                    <div className='lo'>
                        { auth? <NavLink onClick={logout} to='/sign-up'>Logout</NavLink> :
                        <NavLink to='/sign-up'>Login/signup</NavLink>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav