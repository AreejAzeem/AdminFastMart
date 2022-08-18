import React, { useState } from "react";
import "./DemandListDetail.css";

function DemandListDetail() {
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
    <div className="demandListDetail">
      <div className="demandListDetailWrapper">
        <div className="demandListDetail_header">
          <h4 className="demandListDetail_head">Message</h4>
        </div>

        <div className="demandListDetail_body">
          <div className="demandlistDetail_userContainer">
            <div className="demandlistDetail_imgDiv">
              <img
                className="demandlist_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
              ></img>
            </div>
            <div className="demandlistDetail_userDiv">
              <h5 className="demandListDetail_user">{demand.userName}</h5>
            </div>
            <div></div>
          </div>
          <div className="demandListDetail_dateDiv">
            <h6 className="demandListDetail_date">{demand.date}</h6>
          </div>
          <div className="demandList_message">
            <p className="demandList_messageText">
              I want to blahn blah blah bla blahn blah blah bla blahn blah blah
              bla blahn blah blah bla.
            </p>
          </div>
          <div className="demandListDetail_orderContainer">
            <div className="demandListDetail_orderLabelDiv">
              <label className="demandListDetail_orderLabel">No of Orders : </label>
            </div>
            <div className="demandListDetail_orderNoDiv">
                <text className="demandListDetail_orderNo">{demand.orderNo}</text>
            </div>
          </div>
          <div className="demandListDetail_buttonContainer">
            <button
              className="accept_btn"       >
              Approve
            </button>
            <button
              className="reject_btn"       >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandListDetail;
