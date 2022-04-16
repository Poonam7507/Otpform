import React from 'react';
import '../css/Form.css';
// import { Link } from 'react-router-dom';
import {useState} from 'react';

function Form() {

    var visible=false;

    const [submit,setsubmit]=useState("");

    // const Click=()=>{
    //     console.log(submit);
    // }

  return(
      
       <div className="container">
          
        <div className="screen">
        
            <div className="screen__content">
            <h1 id="heading">
              Registration
              </h1>
                <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="email" className="login__input" placeholder="Enter Email" onChange={(event)=>{setsubmit(event.target.value)}}/>
                    </div>
                    {/* <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="otp" className="login__input" placeholder="OTP"/>
                    </div> */}
                    <button className="button login__submit" onClick={visible=true}>
                        <span className="button__text">Generate OTP</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>			
                </form>
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
  );
 
}

export default Form;
