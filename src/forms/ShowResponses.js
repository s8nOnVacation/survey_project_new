
import React from 'react';
import Chart from "react-google-charts";

class ShowResponses extends React.Component {

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            surveyresponse: [
                { id: 1, Question: "Which IDE do you use for programming in React / Node JS?", Option1: "Eclipse IDE", Value1: 50, Option2: "Microsoft Visual Studio", Value2: 30, Option3: "IntelliJ", Value3: 20 },
                { id: 2, Question: "Which IDE do you think is most flexible?", Option1: "Eclipse IDE", Value1: 30, Option2: "Microsoft Visual Studio", Value2: 40, Option3: "IntelliJ", Value3: 30 },
                { id: 3, Question: "Which IDE do you think is more powerful?", Option1: "Eclipse IDE", Value1: 40, Option2: "Microsoft Visual Studio", Value2: 20, Option3: "IntelliJ", Value3: 40 },
                { id: 4, Question: "Which IDE do you think is more useful?", Option1: "Eclipse IDE", Value1: 30, Option2: "Microsoft Visual Studio", Value2: 40, Option3: "IntelliJ", Value3: 30 },

            ]

        }
    }


    renderTableData() {
        return this.state.surveyresponse.map((survey, index) => {
            const { id, Question, Option1, Value1, Option2, Value2, Option3, Value3 } = survey //destructuring
            return (
                <tr key={id}>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Question', 'Response'],
                            [Option1, Value1],
                            [Option2, Value2],
                            [Option3, Value3],
                        ]}
                        options={{
                            title: Question,
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
                <center><h1 id='title' style={{backgroundColor:"white"}}>Survey Response Dashboard</h1></center>
                <br></br>
                <br></br>
                <table id='surveyresponse' style={{margin:"auto", marginRight:"auto", justifyContent:"center", alignItems:"center"}}>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ShowResponses;