import React from 'react';
import { useState} from "react";
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
        let currentClass = el.getAttribute("class");
        if (currentClass === 'choiceInput')
            el.setAttribute("class", "choiceInputToggled");
        else
            el.setAttribute("class", "choiceInput");
    }

    // if (props.questionDetails && props.mode == 'fill') {
    //     let len = props.questionDetails.length;
    //     let i;
    //     let arr = selectedOption;
    //     for (i = 0; i < len; i++) {
    //         setQuestionInput(props.questionDetails[i]);
    //         return (
    //             <div className="fmQuestionBox">
    //                 <h2 className="quesHeading">Question {i + 1}</h2>
    //                 <div className="innerQuesBox">
    //                     <input type="text" className="quesInput" value={questionInput[0]}></input>
    //                     <div className="innerChoiceBox">
    //                         <input type="text" className="choiceInput cursorP" id="choiceInput1" value={questionInput[1]} onClick={() => { arr[i] = { i: "response 1" }; toggleColor("choiceInput1"); }}></input>
    //                         <input type="text" className="choiceInput cursorP" id="choiceInput2" value={questionInput[2]} onClick={() => { arr[i] = { i: "response 2" }; toggleColor("choiceInput2"); }}></input>
    //                         <input type="text" className="choiceInput cursorP" id="choiceInput3" value={questionInput[3]} onClick={() => { arr[i] = { i: "response 3" }; toggleColor("choiceInput3"); }}></input>
    //                         <input type="text" className="choiceInput cursorP" id="choiceInput4" value={questionInput[4]} onClick={() => { arr[i] = { i: "response 4" }; toggleColor("choiceInput4"); }}></input>
    //                         {setSelectedOption(arr[i])}
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    if (props.questionInput && props.mode === 'view') {
        // let len = props.questionDetails.length;
        // let i;
        // for (i = 0; i < len; i++) {
        //     setQuestionInput(props.questionDetails[i]);
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
        // }
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
