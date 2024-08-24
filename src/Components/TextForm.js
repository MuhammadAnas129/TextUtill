import React,{useState} from 'react'


const TextForm = (props) => {
    
    const handleUpClick=()=>{
        // console.log("Uppercase Clicked")
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('text has been converted to uppercase','success')
    }
    const handleLowClick=()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert('text has been converted to lowercase','success')
    }
    const handleClearText=()=>{
        let newText= '';
        setText(newText)
        props.showAlert('text has been cleared','success')
    }
    const handleCopy=()=>{
        let newText= document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('text has been copied','success')
    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);//js concept Rajex:  if one or more then one spaces in a string remove krda ga sare spaces ko or arry ma change kr da gaa
       setText(newText.join(" "));//dobara sa space wali jgha ak ak space add kr da ga or join kr da gaa
       props.showAlert('extra spaces have been removed','success')
    }
    const handeleOnChange=(event)=>{
        // console.log("On Change")
        //how to handle events
        //setText(event.target.value) is used to update the text with the value user enter and it allow user to type in textarea
        setText(event.target.value);
    }
    //how to handle State
    const[text,setText]= useState(" ");
    // text="hgdfs"//wrong way to change state
    // setText("This is text2")//right way to change state
  return (
    <>
      <div className='container'>
       <h2 className={`text-${props.mode==='light'?'dark':'white'}`}>{props.heading} </h2>
          <div className="mb-3">
             <textarea className="form-control" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'gray', }} value={text} onChange={handeleOnChange} id="myBox" rows="8" ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'white'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minuts to read</p>
        <h2>Preview</h2>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter something to preview here"}</p>
      </div>

</>
  )
}

export default TextForm
