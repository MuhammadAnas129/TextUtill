
// import './App.css';

import About from "./Components/About";
// import { useState } from "react";
import  Alert  from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode hase been enabled",'success')
     //only to show different titles in 2 sec time interval when dark mode enabled 
      /*setInterval(()=>{
        document.title = 'TexyUtils is amazing'
      },2000)
      setInterval(()=>{
        document.title = 'Install TexyUtils now'
      },1500)*/
    }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light mode hase been enabled",'success')
      }
  }

  const showAlert=(message,type)=>{
    setAlert({
          msg: message,
          type: type
    }
    )
    //disable alret after 5 second
    setTimeout(() => setAlert(null), 5000);
  }

  return (
<>
<Router>
<Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
<Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert}/> }>
          {/* <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert}/>  */}
          </Route>
        </Routes>
</div>
</Router>
</>
  );
}

export default App;
