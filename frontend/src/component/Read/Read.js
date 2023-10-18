import React from "react";
import  './Read.css'
// import HandleFetch from "../../utils/handleFetch";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

let Read=(props)=>{
    let m;
        const url=window.location.href;
         m=url.slice(27)
    const{data,error,isError,isLoading}=useQuery(
        ['data'],async ()=>await ((await fetch(`/api/v1/read/${m}`)).json())
    )
    if(isError){
        return <h1> error occure while fetching{error}</h1>
    }
    if(isLoading){
        return<h1>loading......</h1>
    }
        return(
            <>
                <div className='main'>
                    <div className="contents">
                        <h1 className='head'>{data.data.header}</h1>
                        <p className='writers'>{data.data.writer}</p>
                        <p className='cont'>{data.data.content}</p>
                    </div>
                </div>
            </>

        )

}
export default Read