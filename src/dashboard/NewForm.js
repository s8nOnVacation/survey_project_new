import React, { Component } from 'react'
import "./NewForm.css"

class NewForm extends Component {
    render() {
        return (
            <div className="cardForm" style={{marginBottom:"50px"}}>
                <div className="cardForm-content">
                    <h2 className="cardForm-title">Create New Form</h2>
                    <p className="cardForm-body">Create a custom form with max 10 questions of MCQ type kyunki usse zyada allowed nahi hain</p>
                    <a href="#" className="buttonForm">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default NewForm
