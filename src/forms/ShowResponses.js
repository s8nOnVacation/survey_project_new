
import React from 'react';
import Chart from "react-google-charts";
import axios from 'axios';

class ShowResponses extends React.Component {

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            surveyresponse: []
        }
        this.responseFetch=this.responseFetch.bind(this);

        this.responseFetch(window.showFormID);
    }

    responseFetch(id) {
        console.log("fesfsf",id)
        let z = { FORM_ID: id }
        let objResp = {};
        let arr=[];
        axios.post('http://survey3171.000webhostapp.com/api/showFormRespPer.php', JSON.stringify(z))
            .then((response) => {
                console.log("resp:", response)
                let question;
                let quesid = 0;
                for (question in response.data.FORM_DATA) {
                    quesid = quesid+1;
                    objResp.id=quesid;
                    objResp.Question = question;
                    let quesOptions;
                    for (quesOptions in response.data.FORM_DATA[question]) {
                        objResp[quesOptions] = response.data.FORM_DATA[question][quesOptions] 
                        // console.log("kkkkddjdsfsaf", objResp);
                    }
                    arr.push(objResp)
                    objResp={};
                }
                this.setState({surveyresponse:arr});
                console.log("surveyRes", this.state.surveyresponse)
            }, (error) => {
                console.log(error);
            }
            );
    }

    renderTableData() {
        return this.state.surveyresponse.map((survey, index) => {
            const { id, Question, OPTION1, VALUE1, OPTION2, VALUE2, OPTION3, VALUE3, OPTION4, VALUE4 } = survey //destructuring
            return (
                <tr key={id}>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Question', 'Response'],
                            [OPTION1, VALUE1],
                            [OPTION2, VALUE2],
                            [OPTION3, VALUE3],
                            [OPTION4, VALUE4],
                        ]}
                        options={{
                            title: "Q"+id+": "+Question,
                        }}
                    //rootProps={{ 'data-testid': {id} }}
                    />
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='respContainer'>
                <center><h1 id='title' style={{ backgroundColor: "white" }}>Survey Response Dashboard</h1></center>
                <br></br>
                <br></br>
                <table id='surveyresponse' style={{ margin: "auto", marginRight: "auto", justifyContent: "center", alignItems: "center" }}>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ShowResponses;