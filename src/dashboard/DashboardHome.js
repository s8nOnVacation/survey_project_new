import React from 'react'
import NewForm from "./NewForm"
import "./Dashboard.css"
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import NewViewEditForm from '../forms/NewViewEditForm';

export default function DashboardHome(props) {

    window.mode = "create";

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

    }

    function showResHandle(id) {
        //Gaurang's Work
    }

    var k;
    if (dataH.length !== 0)
        k = dataH.map((ele, index) =>
            <div id={ele.FORM_ID} className="AK">
                <h3 >{ele.FORM_NAME}</h3>
                {/* <h6>{ele.CREATED_ON}</h6> */}
                <a className="Share" href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share" target="_blank" rel="noreferrer">Share<i className="fa fa-share-alt" aria-hidden="true"></i></a>
                <div className="buttons">
                    <a className="viewForm" onClick={() => viewHandle(ele.FORM_ID)}>View Form</a>
                    <a className="editForm" onClick={() => editHandle(ele.FORM_ID)}>Edit</a>
                    <a className="deleteForm" onClick={() => deleteHandle(ele.FORM_ID)}>Delete</a>
                    <a className="showResponses" onClick={() => showResHandle(ele.FORM_ID)}>Show Responses</a>
                    <br />
                    <a className="fillForm" onClick={() => fillHandle(ele.FORM_ID)}>Fill Form</a>
                </div>
            </div>)
    // console.log(k);
    return (
        <div>
            <div className="base-container">
                {modeState === "create" ? <NewForm /> : ""}
                {modeState === "edit" ? <NewViewEditForm mode={modeState} questionDetails={window.formResponse} /> : ""}
                {modeState === "view" ? <NewViewEditForm mode={modeState} questionDetails={window.formResponse} /> : ""}
            </div>
            {modeState === "create" ?
            <div className="formsDiv">
                {dataH.length > 0 ?
                    <h1 className="formsHeading">Your Forms</h1> : ""}
                <div className="showForms">{k?k.reverse():""}</div>
            </div>
            :""}
        </div>
    )
}
