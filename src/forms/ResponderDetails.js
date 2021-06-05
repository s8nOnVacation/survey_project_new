import React from 'react';
import { useState } from "react";

function ResponderDetails(props) {
    let [responder, setResponder] = useState([]);
    // let [email, setEmail] = useState("");
    // let [mobile, setMobile] = useState("");

    let handleChange = (e) => {
        let arr = responder;
        if (e.target.className === "nameInput")
            arr[0] = e.target.value;
        else if (e.target.className === "emailInput")
            arr[1] = e.target.value;
        else if (e.target.className === "numberInput")
            arr[2] = e.target.value;
        setResponder(arr);
    }

    if (props.responderDetails && props.mode !== 'fill') {
        setResponder(props.responderDetails);
        return (
            <div className="fmResponderBox">
                <h3>Name: {responder[0]}</h3>
                <h3>Email: {responder[1]}</h3>
                <h3>Mobile: {responder[2]}</h3>
            </div>
        )
    }
    else {
        return (
            <div className="fmResponderBox">
                <h2>Enter Your Details</h2>
                <input type="text" className="nameInput" placeholder="Please enter your name" value={responder[0]} onChange={(e) => handleChange(e)} required></input>
                <input type="text" className="emailInput" placeholder="Please enter your email" value={responder[1]} onChange={(e) => handleChange(e)} required></input>
                <input type="text" className="numberInput" placeholder="Please enter your mobile number" value={responder[2]} onChange={(e) => handleChange(e)} required></input>
            </div>
        )
    }

}


export default ResponderDetails
