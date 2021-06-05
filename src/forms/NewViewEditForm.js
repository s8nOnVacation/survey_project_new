import React from 'react';
import axios from 'axios';
// import { useState } from 'react';
import FormName from './FormName';
import NewQuestion from './NewQuestion';
import "./NewViewEditForm.css";

class NewViewEditForm extends React.Component {

    constructor(props) {
        super(props);
        console.log("fawdad", props)
        this.state = {
            counter: [""],
            questionInput: [],
            fmName: this.props.questionDetails && this.props.questionDetails.FORM_NAME ? this.props.questionDetails.FORM_NAME : "",
            selectedOption: []
        }

        this.routeChange = this.routeChange.bind(this);
        this.handleNewQuesClick = this.handleNewQuesClick.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);

        if (this.props.questionDetails && this.props.questionDetails.QUE) {
            let arr = [];
            let i;

            for (i = 0; i < this.props.questionDetails.QUE.length; i++) {
                this.state.questionInput[i] = [];
                arr.push("");

                let x;
                for (x in this.props.questionDetails.QUE[i]) {
                    let y;
                    for (y in this.props.questionDetails.QUE[i][x]) {
                        this.state.questionInput[i][0] = y;
                        this.state.questionInput[i][1] = this.props.questionDetails.QUE[i][x][y][0];
                        this.state.questionInput[i][2] = this.props.questionDetails.QUE[i][x][y][1];
                        this.state.questionInput[i][3] = this.props.questionDetails.QUE[i][x][y][2];
                        this.state.questionInput[i][4] = this.props.questionDetails.QUE[i][x][y][3];
                    }
                }
            }
            this.state.counter = arr;
        }

        console.log("fafsafsafa", this.state.questionInput)
    }

    formNamehandleChange = (e) => {
        this.setState({ fmName: e.target.value });
    }

    handleChange = (e, index) => {
        let arr = this.state.questionInput;
        if (e.target.className === "quesInput")
            arr[index][0] = e.target.value;
        else if (e.target.id === "choiceInput1")
            arr[index][1] = e.target.value;
        else if (e.target.id === "choiceInput2")
            arr[index][2] = e.target.value;
        else if (e.target.id === "choiceInput3")
            arr[index][3] = e.target.value;
        else if (e.target.id === "choiceInput4")
            arr[index][4] = e.target.value;
        // console.log("sfdf", arr)
        this.setState({ questionInput: arr });
    }

    routeChange() {
        let path = "/";
        this.props.history.push(path);
    }

    handleNewQuesClick = (e) => {
        e.preventDefault();
        let arr = this.state.counter;
        arr.push("")
        this.setState({ counter: arr });
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        if (this.props.mode == "view") { window.location.reload(); }
        else {
            console.log("fef", this.state.fmName)
            console.log("sdf", this.state.questionInput);
            let submitData = {};
            submitData.FORM_NAME = this.state.fmName;
            submitData.FORM_ID = this.props.questionDetails.FORM_ID;
            submitData.QUS = {};
            let i;
            for (i = 0; i < this.state.questionInput.length; i++) {
                let quesName = this.state.questionInput[i][0];
                let answerArray = [this.state.questionInput[i][1], this.state.questionInput[i][2], this.state.questionInput[i][3], this.state.questionInput[i][4]];
                submitData.QUS[quesName] = answerArray;
            }
            console.log("SubmitData::::", submitData)

            if (this.props.mode == "edit") {
                axios.post('http://survey3171.000webhostapp.com/api/EditForm.php', JSON.stringify(submitData))
                    .then((response) => {
                        console.log(response);
                        window.q1 = response.data.FORM_ID;
                        console.log("dwaaddadawadadaaddaddadawd:", submitData);
                        if (this.props.questionDetails.FORM_ID && this.props.questionDetails.FORM_ID !== response.FORM_ID) 
                        {
                            let y = { FORM_ID: this.props.questionDetails.FORM_ID }
                            console.log(JSON.stringify(y));
                            axios.post('http://survey3171.000webhostapp.com/api/deleteForm.php', JSON.stringify(y))
                                .then((response) => {
                                    console.log(response);
                                    window.location.reload();
                                    document.getElementById(this.props.questionDetails.FORM_ID).style.display = "none";
                                }, (error) => {
                                    console.log(error);
                                });
                        }
                        else window.location.reload();
                    }, (error) => {
                        console.log(error);
                    })
            }
            else {
                axios.post('http://survey3171.000webhostapp.com/api/UploadForm.php', JSON.stringify(submitData))
                    .then((response) => {
                        console.log(response);
                        window.q1 = response.data.FORM_ID;
                        this.routeChange();
                    }, (error) => {
                        console.log(error);
                    })
            }
        }
    }

    render() {
        // console.log("daawdwadada:", this.state.questionInput.length);

        let questionComp = this.state.counter.map((e, index) => {
            this.state.questionInput[index] = !this.state.questionInput[index] ? [] : this.state.questionInput[index];

            // return this.props.questionDetails ? <NewQuestion questionDetails={this.props.questionDetails} mode={window.mode} handleChange={this.handleChange} questionInput={this.state.questionInput[index]} index={index} /> : 
            return <NewQuestion mode={this.props.mode ? this.props.mode : window.mode} handleChange={this.handleChange} questionInput={this.state.questionInput[index]} index={index} />
        })

        return (
            <form className="formCreateContainer" onSubmit={this.handleSubmitClick}>
                <FormName fmName={this.state.fmName} handleChange={this.formNamehandleChange} mode={this.props.mode ? this.props.mode : window.mode} />
                <br />
                {questionComp}
                {/* <br /> */}
                {(this.props.mode ? this.props.mode : window.mode) == "view" ?
                    <button className="actionBtn">Continue To Dashboard</button> :
                    <div>
                        <button type="submit" className="actionBtn" onClick={this.handleNewQuesClick}>Add New Question</button>
                        <input type="submit" className="actionBtn" value="Submit Form"></input>
                    </div>
                }
                <br />
            </form>
        )
    }
}


export default NewViewEditForm
