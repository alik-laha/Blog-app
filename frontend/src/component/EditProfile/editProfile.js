import React, { useState} from "react";
import axios from "axios";
import'./editProfile.css'
let Edit=()=>{

    let data=localStorage.getItem('user')
    data=JSON.parse(data)
    console.log(data._id)


    const [name, setName] = useState(data.name)
    const [phoneNo, setPhoneNo] = useState(data.phoneNo)
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')

    let getName = (e) => {
        setName(e.target.value);
    }
    let getPhoneNo = (e) => {
        setPhoneNo(e.target.value);
    }
    let getEmail = (e) => {
        setEmail(e.target.value);
    }
    let getPassword = (e) => {
        setPassword(e.target.value);
    }
    let getOldPassword = (e) => {
        setOldPassword(e.target.value);
    }

     const update=(e)=>{
         e.preventDefault();
        axios.put(`http://127.0.0.1:7000/api/v1//update-user/${data.id}`,{name,phoneNo,email})
            .then(result=>{
                if(result){
                    localStorage.setItem("user",JSON.stringify(result.data));
                }
            })
     }

    return(
        <>
        <div id='container'>
            <form onSubmit={update} className='contain'>
            <label className='update lab'> Name</label>
            <input type='text' className='update put' placeholder={name} name='chname'value={name} onChange={getName}/>

            <label className='update lab'> Email</label>
            <input type='email' className='update put' placeholder={email} name='chEmail' value={email} onChange={getEmail}/>

            <label className='update lab' >phoneNo</label>
            <input type='number' className='update put' placeholder={phoneNo} name='chPhoneNo' value={phoneNo} onChange={getPhoneNo}/>

                <input type='submit' className='update submit'/>
            </form>
        </div>
        </>
    )
}
export default Edit