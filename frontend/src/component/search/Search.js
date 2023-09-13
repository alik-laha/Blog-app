import React from "react";
import './Searching.css'

let Searched=(props)=>{


    return(
        <div className="body">
            <div className="content">
                {props.data.map(i => {
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
export default Searched