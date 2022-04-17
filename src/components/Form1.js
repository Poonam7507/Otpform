import React from 'react';
import '../css/Form.css'


export default function Form1() {
  return (
    
       <div className="container" >
          
          <div className="screen"  >
          
              <div className="screen__content">
              <h1 id="heading">
                Registration
                </h1>
                  <form className="login1">
                      <div className="login__field">
                          <i className="login__icon fas fa-user"></i>
                          <input type="text" className="inputbox" placeholder="Enter Team Leader Name" />
                      </div>
                      <div className="login__field">
                          <i className="login__icon fas fa-user"></i>
                          <input type="text" className="inputbox" placeholder="Enter Player Name" />
                      </div>
                      <div className="login__field">
                          <i className="login__icon fas fa-user"></i>
                          <input type="text" className="inputbox" placeholder="Enter Player Name" />
                      </div>
                      <div className="login__field">
                          <i className="login__icon fas fa-user"></i>
                          <input type="text" className="inputbox" placeholder="Enter Player Name" />
                      </div>
                    
                      <button className="button login__submit"  >
                          <span  >Done</span>
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
  )
}
