import React, { useState } from "react";
import './Add.css'
import axios from "axios";

let ADD = () => {
    const [header, setHeader] = useState("")
    const [writer, setWriter] = useState("")
    const [subject, setSubject] = useState("")
    const [content, setcontent] = useState("")
    let getHeader = (e) => {
        setHeader(e.target.value)
    }
    let getWriter = (e) => {
        setWriter(e.target.value)
    }
    let getSubject = (e) => {
        setSubject(e.target.value)
    }
    let getContent = (e) => {
        setcontent(e.target.value)
    }
    let newArtical = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:7000/api/v1/artical/new', { header, writer, content, subject })
            .then((result) => {
                if (result.sucess === "true") {
                    console.log("all data has been pushed");
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div className="addArtical">
            <div className="container">
                <form onSubmit={newArtical}>
                    <input type="text" className="Add" id="heading" name="heading" placeholder="Heading" value={header} onChange={getHeader} />
                    <div className="jar">
                        <input type="text" className="Add" id="writer" name="name" placeholder="Writer name" value={writer} onChange={getWriter} />
                        <input type="text" className="Add" id="subject" name="subject" placeholder="Subject of Writing" value={subject} onChange={getSubject} />
                    </div>
                    <textarea name="content" className="Add" id="text" cols="70" rows="25" value={content} onChange={getContent} placeholder="content" ></textarea>
                    <input type="file" name="images" id="img" className="Add" />
                    <input type="submit" placeholder="Submit" className="Add" id="sub" />
                </form>
            </div>
        </div>
    )
}

export default ADD;


