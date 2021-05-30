import React,{Component} from 'react';
class Form extends Component{
    render(){
        return(
            <div>
                  
        <section className="A">
        <h2 style={{padding:"0px"}}>Enter Your Details</h2><br></br>
         <form>
         <input  style={{marginTop:"0px"}} className="f" type="text" placeholder="Enter Your Name" required></input> <br></br>
         <input type="email" placeholder="Enter Email-ID" required></input><br></br>
         <input type="tel" id="phone" name="phone" placeholder="+91-XXXXXXXXXX" pattern="[0-9]{10}" required></input><br></br>
         {/* <input style={{width:"300px" ,marginRight:"90px",marginTop:"70px"}} type="reset"></input>
         <button onClick={} style={{width:"300px",height:"80px",opacity:"0.7",marginTop:"0px",boxSizing:"border-box",fontSize:"70px"}} type="submit">Next</button>  */}
         </form>
         </section>
       
            </div>
        );
    }
}
export default Form;