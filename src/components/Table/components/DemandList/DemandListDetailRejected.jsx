import React, { useState } from "react";
import "./DemandListDetailRejected.css";

function DemandListDetailRejected({rejectedDemandDetail,defaultDetail }) {
console.log(rejectedDemandDetail);
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
      {rejectedDemandDetail ?
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
              <h5 className="demandListDetail_rejected_user">{rejectedDemandDetail.demandUserId.username}</h5>
            </div>
            
          </div>
          <div className="demandListDetail_rejected_dateDiv">
            <h6 className="demandListDetail_rejected_date">{rejectedDemandDetail.createdDateTime.split("T")[0]}</h6>
          </div>
          <div className="demandlistDetail_accepted_productDiv">
            <h4 style={{
              color:'gray',
              fontSize:'14px',
              fontWeight:'700',
              justifyContent:'center',
              verticalAlign:'middle',
              marginTop:'6px',
              
              
            }}> Product :</h4>
            <h6 style={{
              color:'black',
              fontSize:'14px',

              fontWeight:'400',
              justifyContent:'center',
              border:'0.3px solid gray',
              borderRadius:'10px',
              padding:'8px',
              verticalAlign:'middle',
              background:'var(--orangestandard)',
              backgroundOpacity:'0.5',
              opacity:0.9,
              color:'white',
            }}>{rejectedDemandDetail.demandProduct}</h6>
          </div>
          <div className="demandList_rejected_message">
            <p className="demandList_rejected_messageText">
             {rejectedDemandDetail.message}
            </p>
            <div style={{
              display:"flex",
              justifyContent:"flex-end",
              fontSize:'13px',
              color:'grey',
       marginRight:'3px',
         marginTop:'-6px'


            }}>{defaultDetail.createdDateTime.split("T")[1].split(".")[0]}
            </div>
          </div>
          <div className="demandListDetail_rejected_orderContainer">
            <div className="demandListDetail_rejected_orderLabelDiv">
              <label className="demandListDetail_rejected_orderLabel">No of Orders : </label>
            </div>
            <div className="demandListDetail_rejected_orderNoDiv">
                <text className="demandListDetail_rejected_orderNo">20</text>
            </div>
          </div>
          <div className="demandListDetail_rejected_buttonContainer">
           <div className="rejected_demandListDetail">
            Rejected
           </div>
          </div>
        </div>
      </div>
      : defaultDetail ?
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
            <h5 className="demandListDetail_rejected_user">{defaultDetail.demandUserId.username}</h5>
          </div>
          <div></div>
        </div>
        <div className="demandListDetail_rejected_dateDiv">
          <h6 className="demandListDetail_rejected_date">{defaultDetail.createdDateTime.split("T")[0]}</h6>
        </div>
        <div className="demandList_rejected_message">
          <p className="demandList_rejected_messageText">
           {defaultDetail.message}
          </p>
          <div style={{
              display:"flex",
              justifyContent:"flex-end",
              fontSize:'13px',
              color:'grey',
       marginRight:'3px',
         marginTop:'-6px'


            }}>{defaultDetail.createdDateTime.split("T")[1].split(".")[0]}
            </div>
        </div>
        <div className="demandListDetail_rejected_orderContainer">
          <div className="demandListDetail_rejected_orderLabelDiv">
            <label className="demandListDetail_rejected_orderLabel">No of Orders : </label>
          </div>
          <div className="demandListDetail_rejected_orderNoDiv">
              <text className="demandListDetail_rejected_orderNo">20</text>
          </div>
        </div>
        <div className="demandListDetail_rejected_buttonContainer">
         <div className="rejected_demandListDetail">
          Rejected
         </div>
        </div>
      </div>
    </div>:<div>No Rejected demands</div>

}
    </div>
  );
}

export default DemandListDetailRejected;
