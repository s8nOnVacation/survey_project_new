import React from 'react'
import FormName from './FormName'
import ResponderDetails from './ResponderDetails'

function FillForm(props) {
    return (
        <div>
            {props.fmName?<FormName fmName={props.fmName} mode={props.mode}/>:""}
            {props.responderDetails?<ResponderDetails responderDetails={props.responderDetails} mode={props.mode}/>:""}
            {props.questionDetails?<NewQuestion questionDetails={props.questionDetails} mode={props.mode}/>:""}
        </div>
    )
}

export default FillForm
