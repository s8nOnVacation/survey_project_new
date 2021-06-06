import React from 'react';
import "./ResponderDetails.css";
import { useState } from "react";

function ResponderDetails(props) {
    return (
        <div className="fmResponderBox">
            <h2 className="quesHeading">Enter Your Details To Proceed To Submit</h2>
            <div className="respInnerBox">
                <input type="text" className="nameInput" placeholder="Your Name" value={props.responder[0]} onChange={(e) => props.responderDetailsHandleChange(e)} required></input>
                <input type="email" className="emailInput" placeholder="Email" value={props.responder[1]} onChange={(e) => props.responderDetailsHandleChange(e)} required></input>
                <input type="number" pattern="[0-9]{10}" onWheel={(e) => e.target.blur()} className="numberInput" placeholder="Mobile Number" value={props.responder[2]} onChange={(e) => props.responderDetailsHandleChange(e)} required></input>
            </div>
        </div>
    )
}


export default ResponderDetails
