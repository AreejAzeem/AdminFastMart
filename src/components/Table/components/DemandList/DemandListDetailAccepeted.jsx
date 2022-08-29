import React, { useState } from "react";
import "./DemandListDetailAccepted.css";

function DemandListDetailAccepted() {
  const [demand, setDemand] = useState({
    id: 1,
    userName: "Areej Azeem",
    date: "24/08/2022",
    time: "23:04",
    message:
      "i want to add a surf excel chotu pak cuz its economical hfhffhbbhfbvhbvbhbv",
      orderNo:20,
  });
  return (
    <div className="demandListDetail_accepted">
      <div className="demandListDetail_acceptedWrapper">
        <div className="demandListDetail_accepted_header">
          <h4 className="demandListDetail_accepted_head">Message</h4>
        </div>

        <div className="demandListDetail_accepted_body">
          <div className="demandlistDetail_accepted_userContainer">
            <div className="demandlistDetail_accepted_imgDiv">
              <img
                className="demandlist_accepted_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
              ></img>
            </div>
            <div className="demandlistDetail_accepted_userDiv">
              <h5 className="demandListDetail_accepted_user">{demand.userName}</h5>
            </div>
            <div></div>
          </div>
          <div className="demandListDetail_accepted_dateDiv">
            <h6 className="demandListDetail_accepted_date">{demand.date}</h6>
          </div>
          <div className="demandList_accepted_message">
            <p className="demandList_accepted_messageText">
              I want to blahn blah blah bla blahn blah blah bla blahn blah blah
              bla blahn blah blah bla.
            </p>
          </div>
          <div className="demandListDetail_accepted_orderContainer">
            <div className="demandListDetail_accepted_orderLabelDiv">
              <label className="demandListDetail_accepted_orderLabel">No of Orders : </label>
            </div>
            <div className="demandListDetail_accepted_orderNoDiv">
                <text className="demandListDetail_accepted_orderNo">{demand.orderNo}</text>
            </div>
          </div>
          <div className="demandListDetail_accepted_buttonContainer">
          <div className="approved_demandListDetail">
           Approved
           </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandListDetailAccepted;
