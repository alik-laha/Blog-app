import axios from "axios";
import React, { useState } from "react";
import "./signup.css"
import {useNavigate} from "react-router-dom"
let Signup = () => {
    const [name, setName] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
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
            axios.post('http://127.0.0.1:7000/api/v1/sign-up', {name, phoneNo, email, password})
                .then((result) => {

                    if (result.status === 201) {
                        console.log("profile has been created");
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


    return (
        <div id="contain">
            <div className="signup">
                <h1 id="Sign">Sign up</h1>
                <form onSubmit={sendData} id="mean">
                    <input type="text" name="name" className="sign" placeholder="Your name" value={name} onChange={getName} />
                    <input type="number" name="phoneNum" className="sign" placeholder="Your phone number" value={phoneNo} onChange={getPhoneNo} />
                    <input type="email" name="email" className="sign" placeholder="Your email" value={email} onChange={getEmail} />
                    <input type="password" name="password" className="sign" placeholder="Password" value={password} onChange={getPassword} />
                    <input type="password" name="confirm" className="sign" placeholder="confirmPassword" value={confirm} onChange={getConfirm} />
                    <input type="submit" name="submit" className="sub" />
                </form>
                <p id="log">Already have an account <a id="cl" href="#">click here</a></p>
            </div>
        </div>
    )
}
export default Signup