import React from 'react';
import { useState } from "react";
import "./NewQuestion.css"

function NewQuestion(props) {
    // console.log("abcde", props)
    // let [questionNo, setQuestionNo] = useState(1);
    // let [questionInput, setQuestionInput] = useState([]);
    // let [selectedOption, setSelectedOption] = useState({ "": "" });

    // let [email, setEmail] = useState("");
    // let [mobile, setMobile] = useState("");

    // let handleChange = (e) => {
    //     let arr = questionInput;
    //     if (e.target.className == "quesInput")
    //         arr[0] = e.target.value;
    //     else if (e.target.id == "choiceInput1")
    //         arr[1] = e.target.value;
    //     else if (e.target.id == "choiceInput2")
    //         arr[2] = e.target.value;
    //     else if (e.target.id == "choiceInput3")
    //         arr[3] = e.target.value;
    //     else if (e.target.id == "choiceInput4")
    //         arr[4] = e.target.value;
    //     setQuestionInput(arr);
    // }

    let toggleColor = (id) => {
        let el = document.getElementById(id);
        let choices = ["choiceInput1" + props.index, "choiceInput2" + props.index, "choiceInput3" + props.index, "choiceInput4" + props.index]
        let x;
        for (x of choices) {
            if (el != document.getElementById(x))
                document.getElementById(x).setAttribute("class", "choiceInput");
        }
        let currentClass = el.getAttribute("class");
        if (currentClass === 'choiceInput')
            el.setAttribute("class", "choiceInputToggled");
        else
            el.setAttribute("class", "choiceInput");
    }

    // $(function(){
    //     var requiredCheckboxes = $('.options :button[required]');
    //     requiredCheckboxes.change(function(){
    //         if(requiredCheckboxes.is(':clicked')) {
    //             requiredCheckboxes.removeAttr('required');
    //         } else {
    //             requiredCheckboxes.attr('required', 'required');
    //         }
    //     });
    // });

    if (props.questionInput && props.mode === 'fill') {
        return (
            <div className="fmQuestionBox">
                <h2 className="quesHeading">Question {props.index + 1}</h2>
                <div className="innerQuesBox">
                    <h4 className="incomingQuestion">{props.questionInput[0]}</h4>
                    <div className="innerChoiceBox options">
                        <button className="choiceInput" style={{ cursor: "pointer" }} id={"choiceInput1" + props.index} onClick={(e) => { e.preventDefault(); props.selectedOption[props.index] = "response 1"; toggleColor("choiceInput1" + props.index); }} name="clickButton" required>{props.questionInput[1]} </button>
                        <button className="choiceInput" style={{ cursor: "pointer" }} id={"choiceInput2" + props.index} onClick={(e) => { e.preventDefault(); props.selectedOption[props.index] = "response 2"; toggleColor("choiceInput2" + props.index); }} name="clickButton">{props.questionInput[2]} </button>
                        <button className="choiceInput" style={{ cursor: "pointer" }} id={"choiceInput3" + props.index} onClick={(e) => { e.preventDefault(); props.selectedOption[props.index] = "response 3"; toggleColor("choiceInput3" + props.index); }} name="clickButton">{props.questionInput[3]} </button>
                        <button className="choiceInput" style={{ cursor: "pointer" }} id={"choiceInput4" + props.index} onClick={(e) => { e.preventDefault(); props.selectedOption[props.index] = "response 4"; toggleColor("choiceInput4" + props.index); }} name="clickButton">{props.questionInput[4]} </button>
                    </div>
                </div>
            </div>
        )
    }

    if (props.questionInput && props.mode === 'view') {
        return (
            <div className="fmQuestionBox">
                <h2 className="incomingQuesHead">Question {props.index + 1}</h2>
                <div className="innerQuesBox">
                    <h4 className="incomingQuestion">{props.questionInput[0]}</h4>
                    <div className="innerChoiceBox">
                        <input type="text" className="choiceInput" id="choiceInput1" value={props.questionInput[1]}></input>
                        <input type="text" className="choiceInput" id="choiceInput2" value={props.questionInput[2]}></input>
                        <input type="text" className="choiceInput" id="choiceInput3" value={props.questionInput[3]}></input>
                        <input type="text" className="choiceInput" id="choiceInput4" value={props.questionInput[4]}></input>
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="fmQuestionBox">
                <h2 className="quesHeading">Question {props.index + 1}</h2>
                <div className="innerQuesBox">
                    <input type="text" className="quesInput" placeholder="Enter your question" value={props.questionInput[0]} onChange={(e) => props.handleChange(e, props.index)} required></input>
                    <div className="innerChoiceBox">
                        <input type="text" className="choiceInput" id="choiceInput1" placeholder="Enter choice 1" value={props.questionInput[1]} onChange={(e) => props.handleChange(e, props.index)} required></input>
                        <input type="text" className="choiceInput" id="choiceInput2" placeholder="Enter choice 2" value={props.questionInput[2]} onChange={(e) => props.handleChange(e, props.index)} required></input>
                        <input type="text" className="choiceInput" id="choiceInput3" placeholder="Enter choice 3" value={props.questionInput[3]} onChange={(e) => props.handleChange(e, props.index)} required></input>
                        <input type="text" className="choiceInput" id="choiceInput4" placeholder="Enter choice 4" value={props.questionInput[4]} onChange={(e) => props.handleChange(e, props.index)} required></input>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewQuestion
