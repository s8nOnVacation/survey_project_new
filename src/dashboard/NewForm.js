import React, { Component } from 'react'
import "./NewForm.css"
import {useHistory} from 'react-router-dom';

export default function NewForm() {
    let history = useHistory();
    const handleClick = () => {
        history.push ('./form/');
     }
    return (
        <div className="cardForm">
            <div className="cardForm-content">
                <h2 className="cardForm-title">Create New Form</h2>
                <p className="cardForm-body">Create a custom form with max 10 questions of MCQ type kyunki usse zyada allowed nahi hain</p>
                <a className="buttonForm" onClick={handleClick}>Let's Go</a>
            </div>
        </div>
    )
}
