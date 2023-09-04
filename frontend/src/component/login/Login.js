import React, { useState } from "react";
import axios from "axios";
import './login.css'
let Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
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
                if (result.data === "success") {
                    console.log("all done");
                }
                else if (result.data === "check the password") {
                    console.log("passwoard is incorrect")
                }
                else {
                    console.log("check the email")
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="add">
            <div className="login">
                <h1>Log-in</h1>
                <form onSubmit={checkData} >
                    <input type="email" name="email" placeholder="Type your email" className="input log" value={email} onChange={getemail} />
                    <input type="password" name="password" placeholder="Type your Passwoard" className="input log" value={password} onChange={getpassword} />
                    <input type="submit" name="" id="submit" className="log" />
                    <p className="sign" >i dont have an acount <a href="#">Creat a acount</a></p>
                </form>
            </div>
        </div>
    )
}
export default Login