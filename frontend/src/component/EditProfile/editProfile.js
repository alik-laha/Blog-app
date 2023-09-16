import React from "react";
import'./editProfile.css'
let Edit=()=>{

    return(
        <>
        <div id='container'>
            <form>
            <label> Name</label>
            <input type='text' placeholder={} name='chname'/>

            <label> Email</label>
            <input type='email' placeholder={} name='chEmail'/>

            <label>phoneNo</label>
            <input type='number' placeholder={} name='chPhoneNo'/>

            <label>Old-Password</label>
            <input type='password' placeholder={} name='Old'/>

            <lable>New-password</lable>
            <input type='password' placeholder={} name='password' />
            </form>
        </div>
        </>
    )
}
export default Edit