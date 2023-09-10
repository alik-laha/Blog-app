import React, { useState } from "react";
import axios from "axios";
import './login.css'
import {useNavigate,NavLink} from "react-router-dom"

let Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    let Navigater=useNavigate();

    let getemail = (e) => {
        setemail(e.target.value);
    }
    let getpassword = (e) => {
        setpassword(e.target.value);
    }


    let checkData = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:7000/api/v1/login', { email, password })
            .then((result) => {
                if (result.data.token) {
                    localStorage.setItem("user",JSON.stringify(result.data))
                    localStorage.setItem("token",JSON.stringify(result.data.token))
                    Navigater('/');
                }
                else {
                    console.log("invalid cradentials")
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="add">
            <div className="login">
                <h1>Log-in</h1>
                <form onSubmit={checkData} >
                    <input type="email" name="email" placeholder="Type your email" className="input log" autocomplete="off" value={email} onChange={getemail} />
                    <input type="password" name="password" placeholder="Type your Passwoard" className="input log" autocomplete="off" value={password} onChange={getpassword} />
                    <input type="submit" name="" id="submit" className="log" autocomplete="off" />
                    <p className="sign" >i dont have an acount <NavLink to='/sign-up'>Creat one</NavLink></p>
                </form>
            </div>
        </div>
    )
}
export default Login