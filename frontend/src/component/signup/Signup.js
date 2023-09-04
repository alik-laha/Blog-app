import axios from "axios";
import React, { useState } from "react";
import "./signup.css"

let Signup = () => {
    const [name, setname] = useState("")
    const [phoneNo, setphoneNo] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirm, setconfirm] = useState("")

    let getname = (e) => {
        setname(e.target.value);
    }
    let getphoneNo = (e) => {
        setphoneNo(e.target.value);
    }
    let getemail = (e) => {
        setemail(e.target.value);
    }
    let getpassword = (e) => {
        setpassword(e.target.value);
    }
    let getconfirm = (e) => {
        setconfirm(e.target.value);
    }

    let sendData = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:7000/api/v1/sign-up', { name, phoneNo, email, password })
            .then((result) => {
                if (result.data === 'your profile hs been created') {
                    console.log("profile has been created");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }




    return (
        <div id="contain">
            <div className="signup">
                <h1 id="Sign">Sign up</h1>
                <form onSubmit={sendData} id="mean">
                    <input type="text" name="name" className="sign" placeholder="Your name" value={name} onChange={getname} />
                    <input type="number" name="phoneNum" className="sign" placeholder="Your phone number" value={phoneNo} onChange={getphoneNo} />
                    <input type="email" name="email" className="sign" placeholder="Your email" value={email} onChange={getemail} />
                    <input type="password" name="password" className="sign" placeholder="Password" value={password} onChange={getpassword} />
                    <input type="password" name="confirm" className="sign" placeholder="confirmPassword" value={confirm} onChange={getconfirm} />
                    <input type="submit" name="submit" className="sub" />
                </form>
                <p id="log">ALready have an account <a id="cl" href="#">click here</a></p>
            </div>
        </div>
    )
}
export default Signup