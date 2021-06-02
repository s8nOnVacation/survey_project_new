import React, { Component } from 'react'
import NewForm from "./NewForm"
import "./Dashboard.css"
import axios from 'axios';
import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function DashboardHome(props) {

    let history = useHistory();
    const handleClick = () => {
        history.push('./form');
    }

    const [dataH, setDataH] = useState([]);
    useEffect(() => {
        axios.get('http://survey3171.000webhostapp.com/api/showAllForms.php')
            .then((response) => {
                console.log(response);
                console.log(response.data.FORM_DATA);
                setDataH([...response.data.FORM_DATA]);
            }, (error) => {
                console.log(error);
            });
    }, [])
    // console.log(setDataH(data));


    function deleteHandle(id) {
        document.getElementById(id).style.display = "none";
        let y = { FORM_ID: id }
        console.log(JSON.stringify(y));
        axios.post('http://survey3171.000webhostapp.com/api/deleteForm.php', JSON.stringify(y))
            .then((response) => {
                console.log(response);
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
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    var k;
    console.log(dataH[0]);
    if (dataH.length != 0)
        k = dataH.map((ele, index) =>
            <div id={ele.FORM_ID} className="AK">
                <h3 >{ele.FORM_NAME}</h3>
                <a className="Share" href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share" target="_blank">Share<i class="fa fa-share-alt" aria-hidden="true"></i></a>
                {/* <i className="fas fa-trash-alt">Ankit</i> */}
                <div className="buttons">
                    <a className="viewForm" onClick={() => viewHandle(ele.FORM_ID)}>View Form</a>
                    <a className="editForm" onClick={() => deleteHandle(ele.FORM_ID)}>Edit</a>
                    <a className="deleteForm" onClick={() => deleteHandle(ele.FORM_ID)}>Delete</a>
                    <a className="showResponses" onClick={() => deleteHandle(ele.FORM_ID)}>Show Responses</a>
                </div>
                {/* <i className="fa fa-search">Search</i> */}
                {/* <DeleteIcon size='small' >Click Me</DeleteIcon> */}
            </div>)
    console.log(k);

    return (
        <div>
            <div className="base-container">
                <NewForm />
            </div>
            <div className="formsDiv">
                <h1 className="formsHeading">Your Forms</h1>
                <div className="showForms">{k}</div>
            </div>
        </div>
    )
}
