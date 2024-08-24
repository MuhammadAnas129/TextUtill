import React from 'react'



//'&&' is used taka dono condition true hon to alert show ho agar 'null' ha to show nhe ho alert
function Alert(props) {
    //ya fuction 'alert.type' ko as world la ka us ka first character ko capital ma convert kr da ga 
    const capitalize=(world)=>{
        const lower= world.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    
  )
}

export default Alert
