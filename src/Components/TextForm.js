import React,{useState} from 'react'


const TextForm = (props) => {
    
    const handleUpClick=()=>{
        // console.log("Uppercase Clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handeleOnChange=(event)=>{
        // console.log("On Change")
        //how to handle events
        //setText(event.target.value) is used to update the text with the value user enter and it allow user to type in textarea
        setText(event.target.value);
    }
    //how to handle State
    const[text,setText]= useState("Enter text here...");
    // text="hgdfs"//wrong way to change state
    // setText("This is text2")//right way to change state
  return (
 <>
       <h2>{props.heading}</h2>
          <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handeleOnChange} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</>
  )
}

export default TextForm
