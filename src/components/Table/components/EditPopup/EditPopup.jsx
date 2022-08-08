import React from 'react'
import "./EditPopup.css";
function EditPopup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup_inner'>
            {props.children}
        </div>
    </div>):"";
  
}

export default EditPopup