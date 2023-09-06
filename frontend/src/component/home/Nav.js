import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


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


    //need to thinnk about display search element in Body
    const handleCh = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://127.0.0.1:7000/api/v1/artical/${key}`);
            result = await result.json();

            result.data.forEach(Data => {
                for (let value in Data) {
                    console.log(`${Data[value]}`)
                }
            })
        }
    }

    return (
        <div className="whole">
            <div className="navbar">
                <ul>
                    <li id='home'>
                        <NavLink id='Hom' to='/'>Home</NavLink>
                    </li>
                    <li className='search'><input type="text" name='search' placeholder='Search aricals' id='searching' onChange={handleCh} /></li>
                    {/* <li className='searchButton'><FontAwesomeIcon icon={faMagnifyingGlass} /></li> */}
                    <li className='tripleDot' onClick={handale} ><FontAwesomeIcon icon={faBars} /></li>
                </ul>
                <div className="float" style={{ display: display }}>
                    <div id="add">
                        <NavLink to='/add' id='Ad' > Add artical</NavLink>

                    </div>
                    <div className="Edit">
                        Edit Profile
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nav