import React, { useState } from "react";
import "./DemandListDetailRejected.css";

function DemandListDetailRejected() {
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
    <div className="demandListDetail_rejected">
      <div className="demandListDetail_rejectedWrapper">
        <div className="demandListDetail__rejected_header">
          <h4 className="demandListDetail_rejected_head">Message</h4>
        </div>

        <div className="demandListDetail_rejected_body">
          <div className="demandlistDetail_rejected_userContainer">
            <div className="demandlistDetail_rejected_imgDiv">
              <img
                className="demandlist_rejected_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
              ></img>
            </div>
            <div className="demandlistDetail_rejected_userDiv">
              <h5 className="demandListDetail_rejected_user">{demand.userName}</h5>
            </div>
            <div></div>
          </div>
          <div className="demandListDetail_rejected_dateDiv">
            <h6 className="demandListDetail_rejected_date">{demand.date}</h6>
          </div>
          <div className="demandList_rejected_message">
            <p className="demandList_rejected_messageText">
              I want to blahn blah blah bla blahn blah blah bla blahn blah blah
              bla blahn blah blah bla.
            </p>
          </div>
          <div className="demandListDetail_rejected_orderContainer">
            <div className="demandListDetail_rejected_orderLabelDiv">
              <label className="demandListDetail_rejected_orderLabel">No of Orders : </label>
            </div>
            <div className="demandListDetail_rejected_orderNoDiv">
                <text className="demandListDetail_rejected_orderNo">{demand.orderNo}</text>
            </div>
          </div>
          <div className="demandListDetail_rejected_buttonContainer">
           <div className="rejected_demandListDetail">
            Rejected
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandListDetailRejected;
