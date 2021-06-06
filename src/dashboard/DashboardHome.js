import React from 'react'
import NewForm from "./NewForm"
import "./Dashboard.css"
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import NewViewEditForm from '../forms/NewViewEditForm';
import ShowResponses from '../forms/ShowResponses';
import ShowResRouter from '../forms/ShowResRouter';

export default function DashboardHome(props) {

    window.mode = "create";
    window.homepage = "http://localhost:3000/";
    // console.log("window.faf", window.homepage)

    let [modeState, setModeState] = useState("create");

    const [dataH, setDataH] = useState([]);
    useEffect(() => {
        axios.get('http://survey3171.000webhostapp.com/api/showAllForms.php')
            .then((response) => {
                console.log(response);
                setDataH([...response.data.FORM_DATA]);
            }, (error) => {
                console.log(error);
            });
    }, [])


    function deleteHandle(id) {
        document.getElementById(id).style.display = "none";
        let y = { FORM_ID: id }
        console.log(JSON.stringify(y));
        axios.post('http://survey3171.000webhostapp.com/api/deleteForm.php', JSON.stringify(y))
            .then((response) => {
                console.log(response);
                window.location.reload();
            }, (error) => {
                console.log(error);
            });
    }

    function viewHandle(id) {
        // document.getElementById(id).style.display = "none";
        let y = { FORM_ID: id }
        console.log(JSON.stringify(y));
        axios.post('http://survey3171.000webhostapp.com/api/showForm.php', JSON.stringify(y))
            .then((response) => {
                window.formResponse = response.data;
                console.log(response);
                setModeState("view");
            }, (error) => {
                console.log(error);
            });
    }

    function editHandle(id) {
        let y = { FORM_ID: id }
        console.log(JSON.stringify(y));
        axios.post('http://survey3171.000webhostapp.com/api/showForm.php', JSON.stringify(y))
            .then((response) => {
                window.formResponse = response.data;
                console.log("respEdit", window.formResponse);
                setModeState("edit");
            }, (error) => {
                console.log(error);
            }
            );
    }

    function fillHandle(id) {
        let y = { FORM_ID: id }
        console.log(JSON.stringify(y));
        axios.post('http://survey3171.000webhostapp.com/api/showForm.php', JSON.stringify(y))
            .then((response) => {
                window.formResponse = response.data;
                setModeState("fill");
            }, (error) => {
                console.log(error);
            }
            );
    }

    // useEffect(() => {
    //     console.log("modest:",modeState) // This is be executed when `loading` state changes
    // }, [modeState])

    function showResHandle(id) {
        window.showFormID = id;
        setModeState("showRes");
        // console.log("modest:",modeState)
    }

    var displayAllForms;
    if (dataH.length !== 0)
        displayAllForms = dataH.map((ele, index) =>
            <div id={ele.FORM_ID} className="allBox">
                <div className="formTitle">
                    <h3 style={{marginLeft:"4%",marginRight:"4%"}}>{ele.FORM_NAME}</h3>
                </div>
                <div className="formCreated">
                    <li className="date">Created On: {ele.CREATED_ON}</li>
                    <a className="Share" href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share" target="_blank" rel="noreferrer">Share<i className="fa fa-share-alt" aria-hidden="true"></i></a>
                </div>
                <div className="buttons">
                    <a className="viewForm" onClick={() => viewHandle(ele.FORM_ID)}>View Form</a>
                    <a className="editForm" onClick={() => editHandle(ele.FORM_ID)}>Edit</a>
                    <a className="deleteForm" onClick={() => deleteHandle(ele.FORM_ID)}>Delete</a>
                    <a className="fillForm" onClick={() => fillHandle(ele.FORM_ID)}>Fill Form</a>
                    <a className="showResponses" onClick={() => showResHandle(ele.FORM_ID)}>Show Responses</a>                    
                </div>
            </div>)
    // console.log(displayAllForms);
    return (
        <div>
            <div className="base-container">
                {modeState === "create" ? <NewForm /> : ""}
                {modeState === "edit" ? <NewViewEditForm mode={modeState} questionDetails={window.formResponse} /> : ""}
                {modeState === "view" ? <NewViewEditForm mode={modeState} questionDetails={window.formResponse} /> : ""}
                {modeState === "fill" ? <NewViewEditForm mode={modeState} questionDetails={window.formResponse} /> : ""}
                {modeState === "showRes"? <ShowResRouter /> : ""}
            </div>
            {modeState === "create" ?
                <div className="formsDiv">
                    {dataH.length > 0 ?
                        <h1 className="formsHeading">Your Forms</h1> : ""}
                    <div className="showForms">{displayAllForms ? displayAllForms.reverse() : ""}</div>
                </div>
                : ""}
            {modeState==="create" && window.location.href==window.homepage?
            <div className="footerBar">
                <br />
                <p className="p1"></p>
                <p className="p2"></p>
                <p className="p3"></p>
            </div>
            :""
            }
        </div>
    )
}
