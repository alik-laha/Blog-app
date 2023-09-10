import React, { useEffect, useState } from "react";
// import HandleFetch from "../../utils/handleFetch";
import './Home.css';


let Home = () => {
    //storing data from database
    const [data, setData] = useState([])

    //fetching function for gating data
    let dataFetch = () => {
        fetch('api/v1', { headers: {Authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}` } })
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
            })
            .catch((error) => {
                console.log("check the backend", error);
            });
    };
    //calling the fetch function
    useEffect(() => {
        dataFetch();
    }, [])
    return (
        <div className="body">
            <div className="content">
                {data.map(i => {
                    return (
                        <>
                            <div className="switch">
                                <div className="conatainer" key={i._id}>
                                    <h1 className="header">{i.header}</h1>
                                    <h4 className="writer">WRITER :  {i.writer}</h4>
                                    <h4 className="date">{i.date}</h4>
                                    <h2 className="subject">{i.subject}</h2>
                                </div>

                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Home

