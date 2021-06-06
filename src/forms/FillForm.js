import React from 'react';
import {useHistory} from 'react-router-dom'
import FormName from './FormName';
import NewQuestion from './NewQuestion';
import ResponderDetails from './ResponderDetails';

function FillForm(props) {
    let history = useHistory();
    const handleClick = () => {
        history.push ('./fillForm/');
     }
    return (
        <div>
            {props.fmName?<FormName fmName={props.fmName} mode={props.mode}/>:""}
            {props.responderDetails?<ResponderDetails responderDetails={props.responderDetails} mode={props.mode}/>:""}
            {props.questionDetails?<NewQuestion questionDetails={props.questionDetails} mode={props.mode}/>:""}
        </div>
    )
}

export default FillForm
