import React, { useEffect } from "react";
import config from "../../config/config";
import "./complaint.css";
function Complaint(complaint) {
  console.log(complaint.complaint);
  
  useEffect(() => {
    // console.log("Complaint");
    
  }, []);
  return (
    
    <div className="Complaint">
      <div className="Complaint_Wrapper">
        <div className="Complaint_Container">
          <div className="Complaint_LeftContainer">
            <div className="Complaint_LeftContainer_title">
              <h5 className="Complaint_LeftContainer_h1">{complaint.complaint.complaintUserId.username}</h5>
              <h5 style={{width:"20%",
fontSize: "14px",
color: "gray",
margin:"3%"
              }}>{complaint.complaint.createdDateTime.split('T')[0]}</h5>
            </div>
            <div className="Complaint_LeftContainer_description">{complaint.complaint.complaintMessage}</div>
            <div
            style={{
                justifyContent: "right",
                textAlign: "right",
                marginRight: "20%",
                fontSize: "14px",
                color: "black",
            }}
            >{complaint.complaint.createdDateTime.split('T')[1].split('.')[0]}</div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Complaint;
