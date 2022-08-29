import React, {useState} from "react";
import { List, Datagrid, TextField } from "react-admin";
import "./DemandList.css";

function DemandList(props) {
  const ref = React.createRef();
  const [active, setActive]=useState(true);

  const makeActive=()=>{
    if(active){
  document.getElementById('demandlistId').classList.add('demandlist_active');
setActive(false);}
  else{
    document.getElementById('demandlistId').classList.remove('demandlist_active');
    setActive(true);
  }
  }
  return (
    <div className="demandlist" id="demandlistId" onClick={makeActive} ref={ref}>
      <div className="demandlist_wrapper">
        <div className="demandlist_imgContainer">
          <img  className="demandlist_img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"></img>
        </div>
        <div className="demandlist_messageContainer">
          <div className="demandlist_messageContainer_user">
            <h6 className="demandlist_messageContainer_header">Areej Azeem</h6></div>
          <div className="demandlist_messageContainer_date">
            <h8>24/08/2022</h8></div>
        </div>
        <div className="demandlist_timeContainer"><h8>23:04</h8></div>
      </div>
    </div>
  );
}

export default DemandList;
