import React from "react";
import {useNavigate} from "react-router-dom";

let Side=()=>{
    const navigate=useNavigate();
let logout=()=>{
    localStorage.clear();
    navigate('/sign-up')
}

const changePass=()=>{
    navigate('/change-password')
}
    return(
        <>
            <div className='box' >
                <ul>
                    <li className="menu side">
                        <p className="dash account">Account Detail</p>
                    </li>

                    <li className="menu side" onClick={changePass}>
                        <p className="dash change">Change Password</p>
                    </li>

                    <li className="menu side" onClick={logout}>
                        <p className="dash change">Logout</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Side