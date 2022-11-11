import React, {useState} from "react";
import { List, Datagrid, TextField } from "react-admin";
import "./DemandList.css";

function DemandList(props) {
  const ref = React.createRef();
  const [active, setActive]=useState(true);
  console.log("in demand list component");
  const dateTime=props.createdDateTime;
 const date=dateTime.split("T")[0];
 const time=dateTime.split("T")[1].split(".")[0];
 console.log(time + " " + date);

//   const makeActive=()=>{
//     if(active){
//       console.log("in active"+ active);
//   document.getElementById('demandlistId').classList.add('demandlist_active');
// setActive(false);}
//   else{
//     console.log("in else active"+ active);
//     document.getElementById('demandlistId').classList.remove('demandlist_active');
//     // setActive(true);
//   }
//   }
  return (
    <div className="demandlist" id="demandlistId"
     onClick={()=>{
    
    //   document.getElementById('demandlistId').classList.remove('demandlist_active');
    //   setActive(true);
    //   makeActive();
    }}
     ref={ref}>
      <div className="demandlist_wrapper">
        <div className="demandlist_imgContainer">
          <img  className="demandlist_img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"></img>
        </div>
        <div className="demandlist_messageContainer">
          <div className="demandlist_messageContainer_user">
            <h6 className="demandlist_messageContainer_header">{props.demandUserId.username}</h6></div>
          <div className="demandlist_messageContainer_date">
            <h6 style={{fontSize:'9px'}} >{date}</h6></div>
        </div>
        <div className="demandlist_timeContainer"><h6 style={{fontSize:"9px"}}>{time}</h6></div>
      </div>
    </div>
  );
}

export default DemandList;
