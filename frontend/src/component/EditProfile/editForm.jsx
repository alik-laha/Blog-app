import { useState } from "react";
import axios from "axios";

const EditForm=()=>{
    const [oldpass,setOldpass]=useState("");
    const [newpass,setNewpass]=useState("");
    const [confirmpass,setConfirmpass]=useState("");


    const changepass=(e)=>{
        e.preventDefault()
        const user=localStorage.getItem('user');
        const id=JSON.parse(user)._id;
        axios.post(`/api/v1/confirmpass/${id}`,{ headers: {Authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` } }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        }
        )
    }
    return(
        
        <div className="forgot" style={{width:"100vw",height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
               <form>
                <div className="form-group">
                    <label for="Old-Password" >Old Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="old password" onChange={(e)=>setOldpass(e.target.value)} value={oldpass}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setNewpass(e.target.value)} value={newpass}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setConfirmpass(e.target.value)} value={confirmpass}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={changepass}>Submit</button>
               </form> 
        </div>
        
    )
}
export default EditForm