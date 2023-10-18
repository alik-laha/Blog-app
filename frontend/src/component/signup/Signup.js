import axios from "axios";
import React, {useEffect, useState} from "react";
import "./signup.css"
import {useNavigate,NavLink} from "react-router-dom"

let Signup = () => {
    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    let Navigater=useNavigate();

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
    let getConfirm = (e) => {
        setConfirm(e.target.value);
    }

    //axios to send data to backend

    let sendData = (e) => {
        e.preventDefault();
        if(password===confirm) {

            axios.post('/api/v1/sign-up', {name, phoneNo, email, password})

                .then((result) => {

                    if (result.data.token) {
                        localStorage.setItem("user",JSON.stringify(result.data));
                        localStorage.setItem("token",JSON.stringify(result.data.token));

                        Navigater('/');
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else{
            console.log("check the password")
        }
    }


    useEffect(() => {
        const auth=localStorage.getItem('user');
        if(auth){
            Navigater('/')
        }
    });
    return (
        <div id="contain">
            <div className="signup">
                <h1 id="Sign">Sign up</h1>
                <form onSubmit={sendData} id="mean">
                    <input type="text" name="name" className="sig" placeholder="Your name" value={name} onChange={getName} />
                    <input type="number" name="phoneNum" className="sig" placeholder="Your phone number" value={phoneNo} onChange={getPhoneNo} />
                    <input type="email" name="email" className="sig" placeholder="Your email" value={email} onChange={getEmail} />
                    <input type="password" name="password" className="sig" placeholder="Password" value={password} onChange={getPassword} />
                    <input type="password" name="confirm" className="sig" placeholder="confirmPassword" value={confirm} onChange={getConfirm} />
                    <input type="submit" name="submit" className="sub" />
                </form>
                <p id="log">Already have an account <NavLink to='/log-in'>click here</NavLink></p>
            </div>
        </div>
    )
}
export default Signup