import React, {useEffect, useState} from "react";


let Read=(props)=>{
    const [data,setData]=useState('')
    const fetching=async ()=>{
       let id=props.read;
       if(id){
           let result=await fetch(`/api/v1/read/${id}`)
           console.log(result);
           setData(result)
       }
    }
    useEffect(() => {
        fetching()
    }, []);
    return(
<>
<div>{data.content}</div>
</>
    )
}
export default Read