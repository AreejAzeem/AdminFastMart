import React from "react";
import { List, Datagrid, TextField } from "react-admin";

function DemandList(props) {
  return (
    <div className="demandlist">
      <div className="demandlist_wrapper">
        <div className="demandlist_imgContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"></img>
        </div>
        <div className="demandlist_messageContainer">
          <div className="demandlist_messageContainer_user">fgfyfg</div>
          <div className="demandlist_messageContainer_message">hfhfjhjjjjjjjjjjjjjjjjj</div>
        </div>
        <div className="demandlist_actionContainer"></div>
      </div>
    </div>
  );
}

export default DemandList;
