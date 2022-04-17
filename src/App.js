import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Form1 from './components/Form1';

function App() {
  return(
    <>
  
      <Router>
       <Switch>
         <Route  path="/" exact component={Form} />
         <Route  path="/form1" exact component={Form1} />
       </Switch>
     </Router>
    </>
   );
}

export default App;





// import './App.css';
// import {useState} from 'react';


// function App() {

//   const [submit,setsubmit]=useState("");

//   return (
//     <div classNameName="App">
//       <h1>Hello</h1>
//       <form classNameName="login">
//          <div classNameName="login__field">
//             <i classNameName="login__icon fas fa-user"></i>
//             <input type="text" classNameName="login__input" placeholder="Email" onChange={(event)=>{setsubmit(event.target.value)}}/>
//          </div>
//          <div classNameName="login__field">
//             <i classNameName="login__icon fas fa-lock"></i>
//             <input type="password" classNameName="login__input" placeholder="Password"/>
//          </div>
//          <button classNameName="button login__submit" onClick={console.log(submit)}>
//            <span classNameName="button__text">Log In Now</span>
//            <i classNameName="button__icon fas fa-chevron-right"></i>
//          </button>		
//          <button classNameName="button login__submit">OTP</button>


//       </form>
//     </div>
//   );
// }

// export default App;
