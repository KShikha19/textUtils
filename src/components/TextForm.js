import { useState } from "react"
import React from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = ''; 
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleEexactClick = () => {
        // console.log("On Change");
        function extractEmail(text) {
            const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
            const emails = text.match(emailPattern);
            return emails;
        }
        
        const exactEmail = extractEmail(text);
        const  emailList = exactEmail.join( ', ')
        console.log(emailList);
        setText(emailList);
    }

    
    
const [text, setText] = useState("");
  return (
    <>
    <div className="container" >
        <h1>
            {props.heading}
        </h1>
        <div className="mb-3">
        {/* <label for="myBox">Comments</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
    </div>
    <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    
    <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>
            {0.008 * text.split(" ").length}Mintues read
        </p>
        
        <h2> Preview </h2>
        <h3>{text}</h3>
    </div>
    <div className="container">
    <button type="button" className="btn btn-primary mx-2" onClick={handleEexactClick}>Email Extractor</button>
        <p>
            {text}
        </p>
    </div>
    
    </>
  )
}
