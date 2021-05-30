import { Redirect, useHistory } from "react-router-dom";
import { browserHistory } from 'react-router';

import React, { Component } from 'react';
import './Name.css';
import Ques from './Questions';
import Detail from './Detail';
import axios from 'axios';
var l = [];
var l1 = [], l2 = [], l3 = [], l4 = [], l5 = [], l6 = [], l7 = [], l8 = [], l9 = [];
var q, q1;

class Nam extends Component {
  constructor(props) {

    super(props);
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      count: 0,
      FORM_NAME: '',
      // Qus:{
      //   qs1:[],
      //   qs2:[]
      // }
      qs1: {},
      qs2: {},
      qs3: {},
      qs4: {},
      qs5: {},
      qs6: {},
      qs7: {},
      qs8: {},
      qs9: {},
      qs10: {},
      //  qs3:{}
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandler1 = this.changeHandler1.bind(this);
    this.option1Handler = this.option1Handler.bind(this);
    this.option2Handler = this.option2Handler.bind(this);
    this.option3Handler = this.option3Handler.bind(this);
    this.option4Handler = this.option4Handler.bind(this);

    this.changeHandler2 = this.changeHandler2.bind(this);
    this.option21Handler = this.option21Handler.bind(this);
    this.option22Handler = this.option22Handler.bind(this);
    this.option23Handler = this.option23Handler.bind(this);
    this.option24Handler = this.option24Handler.bind(this);

    this.changeHandler3 = this.changeHandler3.bind(this);
    this.option31Handler = this.option31Handler.bind(this);
    this.option32Handler = this.option32Handler.bind(this);
    this.option33Handler = this.option33Handler.bind(this);
    this.option34Handler = this.option34Handler.bind(this);

    this.changeHandler4 = this.changeHandler4.bind(this);
    this.option41Handler = this.option41Handler.bind(this);
    this.option42Handler = this.option42Handler.bind(this);
    this.option43Handler = this.option43Handler.bind(this);
    this.option44Handler = this.option44Handler.bind(this);

    this.changeHandler5 = this.changeHandler5.bind(this);
    this.option51Handler = this.option51Handler.bind(this);
    this.option52Handler = this.option52Handler.bind(this);
    this.option53Handler = this.option53Handler.bind(this);
    this.option54Handler = this.option54Handler.bind(this);

    this.changeHandler6 = this.changeHandler6.bind(this);
    this.option61Handler = this.option61Handler.bind(this);
    this.option62Handler = this.option62Handler.bind(this);
    this.option63Handler = this.option63Handler.bind(this);
    this.option64Handler = this.option64Handler.bind(this);

    this.changeHandler7 = this.changeHandler7.bind(this);
    this.option71Handler = this.option71Handler.bind(this);
    this.option72Handler = this.option72Handler.bind(this);
    this.option73Handler = this.option73Handler.bind(this);
    this.option74Handler = this.option74Handler.bind(this);

    this.changeHandler8 = this.changeHandler8.bind(this);
    this.option81Handler = this.option81Handler.bind(this);
    this.option82Handler = this.option82Handler.bind(this);
    this.option83Handler = this.option83Handler.bind(this);
    this.option84Handler = this.option84Handler.bind(this);

    this.changeHandler9 = this.changeHandler9.bind(this);
    this.option91Handler = this.option91Handler.bind(this);
    this.option92Handler = this.option92Handler.bind(this);
    this.option93Handler = this.option93Handler.bind(this);
    this.option94Handler = this.option94Handler.bind(this);

    this.changeHandler10 = this.changeHandler10.bind(this);
    this.option101Handler = this.option101Handler.bind(this);
    this.option102Handler = this.option102Handler.bind(this);
    this.option103Handler = this.option103Handler.bind(this);
    this.option104Handler = this.option104Handler.bind(this);

    this.sendDataHandler = this.sendDataHandler.bind(this);
    // this.changeHandler1=this.changeHandler1.bind(this);
  }

  clickHandler(e) {

    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });

    //  {this.state.count<0?<Ques/>:null}
    //this.click2Handler(this.state.count);
  }
  changeHandler(e) {
    this.setState({ FORM_NAME: e.target.value });
    console.log(JSON.stringify(this.state));
  }
  changeHandler1(e) {
    //  const a=e.target.value;

    q = { [e.target.value]: l };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs1: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option1Handler(e) {
    let o = { FORM_NAME: this.state.FORM_NAME };
    console.log(o);
    l[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option2Handler(e) {
    let o = { FORM_NAME: this.state.FORM_NAME };
    console.log(o);
    l[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option3Handler(e) {
    let o = { FORM_NAME: this.state.FORM_NAME };
    console.log(o);
    l[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option4Handler(e) {
    let o = { FORM_NAME: this.state.FORM_NAME };
    console.log(o);
    l[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }

  //QUESTION2
  changeHandler2(e) {
    q = { [e.target.value]: l1 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs2: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option21Handler(e) {

    l1[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option22Handler(e) {

    l1[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option23Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l1[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option24Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l1[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //QUESTION3

  changeHandler3(e) {
    q = { [e.target.value]: l2 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs3: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option31Handler(e) {

    l2[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option32Handler(e) {

    l2[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option33Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l2[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option34Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l2[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //Question4
  changeHandler4(e) {
    q = { [e.target.value]: l3 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs4: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option41Handler(e) {

    l3[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option42Handler(e) {

    l3[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option43Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l3[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option44Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l3[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //Question5
  changeHandler5(e) {
    q = { [e.target.value]: l4 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs5: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option51Handler(e) {

    l4[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option52Handler(e) {

    l4[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option53Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l4[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option54Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l4[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //Question6
  changeHandler6(e) {
    q = { [e.target.value]: l5 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs6: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option61Handler(e) {

    l5[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option62Handler(e) {

    l5[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option63Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l5[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option64Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l5[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }

  //Question7
  changeHandler7(e) {
    q = { [e.target.value]: l6 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs7: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option71Handler(e) {

    l6[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option72Handler(e) {

    l6[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option73Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l6[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option74Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l6[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //Question8
  changeHandler8(e) {
    q = { [e.target.value]: l7 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs8: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option81Handler(e) {

    l7[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option82Handler(e) {

    l7[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option83Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l7[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option84Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l7[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //Question9
  changeHandler9(e) {
    q = { [e.target.value]: l8 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs9: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option91Handler(e) {

    l8[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option92Handler(e) {

    l8[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option93Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l8[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option94Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l8[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  //Question10
  changeHandler10(e) {
    q = { [e.target.value]: l9 };
    //  q[e.target.value]=["a","b"];
    this.setState({ qs10: q });
    //   var q={this.state.FORM_NAME};
    console.log(JSON.stringify(this.state));
  }
  option101Handler(e) {

    l9[0] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option102Handler(e) {

    l9[1] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option103Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l9[2] = e.target.value;
    console.log(JSON.stringify(this.state));
  }
  option104Handler(e) {
    //  let  o={FORM_NAME:this.state.FORM_NAME};
    //  console.log(o);
    l9[3] = e.target.value;
    console.log(JSON.stringify(this.state));
  }

  routeChange() {
    let path = "/";
    this.props.history.push(path);
  }

  sendDataHandler() {

    let c = { ...this.state.qs1, ...this.state.qs2, ...this.state.qs3, ...this.state.qs4, ...this.state.qs5, ...this.state.qs6, ...this.state.qs7, ...this.state.qs8, ...this.state.qs9, ...this.state.qs10 };
    let z = { FORM_NAME: this.state.FORM_NAME, Questions: { ...c } };
    console.log(JSON.stringify(z));
    axios.post('http://survey3171.000webhostapp.com/api/UploadForm.php', JSON.stringify(z))
      .then((response) => {
        console.log(response);
        q1 = response.data.FORM_ID;
      }, (error) => {
        console.log(error);
      });
    this.routeChange();
  }

  render() {

    const children = [];
    for (var i = 0; i < this.state.count; i += 1) {
      if (i < 9) {
        switch (i) {
          case 0:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option22Handler} op3={this.option23Handler} op4={this.option24Handler} op1={this.option21Handler} data1={this.changeHandler2} data={this.clickHandler} ind={i + 1} />);
            break;
          case 1:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option32Handler} op3={this.option33Handler} op4={this.option34Handler} op1={this.option31Handler} data1={this.changeHandler3} data={this.clickHandler} ind={i + 1} />);
            break;
          case 2:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option42Handler} op3={this.option43Handler} op4={this.option44Handler} op1={this.option41Handler} data1={this.changeHandler4} data={this.clickHandler} ind={i + 1} />);
            break;
          case 3:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option52Handler} op3={this.option53Handler} op4={this.option54Handler} op1={this.option51Handler} data1={this.changeHandler5} data={this.clickHandler} ind={i + 1} />);
            break;
          case 4:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option62Handler} op3={this.option63Handler} op4={this.option64Handler} op1={this.option61Handler} data1={this.changeHandler6} data={this.clickHandler} ind={i + 1} />);
            break;
          case 5:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option72Handler} op3={this.option73Handler} op4={this.option74Handler} op1={this.option71Handler} data1={this.changeHandler7} data={this.clickHandler} ind={i + 1} />);
            break;
          case 6:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option82Handler} op3={this.option83Handler} op4={this.option84Handler} op1={this.option81Handler} data1={this.changeHandler8} data={this.clickHandler} ind={i + 1} />);
            break;
          case 7:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option92Handler} op3={this.option93Handler} op4={this.option94Handler} op1={this.option91Handler} data1={this.changeHandler9} data={this.clickHandler} ind={i + 1} />);
            break;
          case 8:
            children.push(<Ques sd={this.sendDataHandler} op2={this.option102Handler} op3={this.option103Handler} op4={this.option104Handler} op1={this.option101Handler} data1={this.changeHandler10} data={this.clickHandler} ind={i + 1} />);
            break;
          default:
        }
      }
    };
    return (
      <div>
        <section className="B">
          <h2 style={{ padding: "0px" }}>Enter Survey Name</h2><br></br>
          <input style={{ padding: "0px", margin: "0px" }} onChange={this.changeHandler} value={this.state.FORM_NAME} type="text" placeholder="Enter Survey Name" required></input>
        </section>
        {/* <Detail/>   */}
        <section>
          <Ques sd={this.sendDataHandler} na={this.state.FORM_NAME} data={this.clickHandler} op2={this.option2Handler} op3={this.option3Handler} op4={this.option4Handler} op1={this.option1Handler} data1={this.changeHandler1} ind={0} />

          {/* {k?{k}:''} */}

          {/* <button onClick={this.clickHandler} title="Add More Questions">+</button>
              */}
        </section>
        {/* {this.state.count<10?<Ques/>:null} */}

        {children}
      </div>
    );
  }
}

export default Nam;

   // this.click2Handler=this.click2Handler.bind(this);

    //this.printHandler=this.printHandler.bind(this);
  // componentDidUpdate()
  // {

  // }
  // click2Handler(){

  //   //  console.log(this.state.count);
  //   //  this.setState({count:this.state.count+1});  
  //   //  {this.state.count<0?<Ques/>:null}
  //   if(this.state.count>0)
  //     return (
  //     <div>
  //     <Ques/>
  //       <button onClick={this.clickHandler} title="Add More Questions">+</button>
  //       </div>
  //     )
  // } 



   //   var j=this.state.Qus.Array[0];
   //   this.state.Qus.qs1[0]=e.target.value;    
   //  Qus.q.l:l
   // console.log(j);
   // console.log(Object.keys(this.state.Qus)[0]);
   // console.log(this.state.Qus[Object.keys(this.state.Qus)[0]]);
   // // this.state.Qus[Object.keys(this.state.Qus)[0]];
   //   this.setState({[this.state.Qus[Object.keys(this.state.Qus)[0]]]:e.target.value});
