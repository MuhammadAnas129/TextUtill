
// import './App.css';

// import About from "./Components/About";
// import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'

function App() {
  const [mode, setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
      }
  }
  return (
<>
<Navbar title="TextUtils" home="Home" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3" >
    <TextForm heading="Enter text to analyze below" mode={mode}/> 
    {/* <About/>  */}
</div>

</>
  );
}

export default App;
