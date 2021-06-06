import React from 'react';
import { useState, useEffect } from "react";
import "./NewQuestion.css"

function FormName(props) {
    if (props.fmName && props.mode == 'view' || props.mode == 'fill') {
        return (
            <div className="fmNameBox">
                <h1>{props.fmName}</h1>
            </div>
        )
    }
    else {
        return (
            <div className="fmNameBox">
                <h2 className="quesHeading">Enter Form Name</h2>
                <input type="text" className="fmInput" placeholder="Please enter the name for your form" value={props.fmName} onChange={(e) => props.handleChange(e)} required></input>
            </div>
        )
    }
}

export default FormName;
