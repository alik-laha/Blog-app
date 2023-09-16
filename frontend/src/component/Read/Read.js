import React, {useEffect, useState} from "react";
import  './Read.css'
import HandleFetch from "../../utils/handleFetch";

let Read=(props)=>{
    const [Data,setData]=useState("alik")
    const fetching = async ()=>{
       let id=props.read;
       if(id){
           let result=await HandleFetch(`/api/v1/read/${id}`)
           setData(result)
       }
    }
    useEffect(() => {
        fetching()
    }, []);
    if(Data!=="alik"){
        return(
            <>
                <div className='main'>
                <div className="contents">
                    <h1 className='head'>{Data.data.header}</h1>
                    <p className='writers'>{Data.data.writer}</p>
                    <p className='cont'>{Data.data.content}</p>
                </div>
                </div>

            </>

        )
    }
    else{
        <p>somthing is bad plz reload</p>
    }

}
export default Read