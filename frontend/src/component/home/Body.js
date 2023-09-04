import React, { useEffect, useState } from "react";
import './body.css'
let Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:7000/api/v1', {
            method: "GET"
        }).then((res) => res.json())
            .then((data) => {
                setData(data.data)
            }).catch((error) => {
                if (error) {
                    console.log("check the backend", error)
                }
            });

    }, [])

    return (
        <div className="body">
            <div className="content">
                {data.map(i => {
                    return (
                        <div className="conatainer" key={i._id}>
                            <h1 className="header">{i.header}</h1>
                            <h4 className="writer">WRITER :  {i.writer}</h4>
                            <h4 className="date">{i.date}</h4>
                            <p id="content">{i.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home

