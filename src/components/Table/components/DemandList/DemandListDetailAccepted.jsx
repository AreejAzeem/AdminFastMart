import React, { useState } from "react";
import "./DemandListDetailAccepted.css";

function DemandListDetailAccepted({acceptedDemandDetail,defaultDetail }) {
  console.log(acceptedDemandDetail);
  console.log(defaultDetail);
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
      {acceptedDemandDetail ? 
      <div className="demandListDetail_acceptedWrapper">
        <div className="demandListDetail_accepted_header">
          <h4 className="demandListDetail_accepted_head">Message</h4>
        </div>
        <div className="demandListDetail_accepted_body">
          <div className="demandlistDetail_accepted_userContainer">
            <div className="demandlistDetail_accepted_imgDiv">
              <img
                className="demandlistDetail_accepted_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
              ></img>
            </div>
            <div className="demandlistDetail_accepted_userDiv">
              <h5 className="demandListDetail_accepted_user">{acceptedDemandDetail.demandUserId.username}</h5>
            </div>
            <div></div>
          </div>
          <div className="demandListDetail_accepted_dateDiv">
            <h6 className="demandListDetail_accepted_date">{acceptedDemandDetail.createdDateTime.split('T')[0]}</h6>
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
              }}>{acceptedDemandDetail.demandProduct}</h6>
            </div>
          <div className="demandList_accepted_message">
            <p className="demandList_accepted_messageText">
            {acceptedDemandDetail.message}
            </p>
            <div style={{
              display:"flex",
              justifyContent:"flex-end",
              fontSize:'13px',
              color:'grey',
    marginRight:'3px',
    marginTop:'-6px'


            }}>{acceptedDemandDetail.createdDateTime.split("T")[1].split(".")[0]}
            </div>
          </div>
          <div className="demandListDetail_accepted_orderContainer">
            <div className="demandListDetail_accepted_orderLabelDiv">
              <label className="demandListDetail_accepted_orderLabel">No of Orders : </label>
            </div>
            <div className="demandListDetail_accepted_orderNoDiv">
                <text className="demandListDetail_accepted_orderNo">20</text>
            </div>
          </div>
          <div className="demandListDetail_accepted_buttonContainer">
          <div className="approved_demandListDetail">
           Approved
           </div>
            
          </div>
        </div>
      </div> 
      : defaultDetail ?
       <div className="demandListDetail_acceptedWrapper">
      <div className="demandListDetail_accepted_header">
        <h4 className="demandListDetail_accepted_head">Message</h4>
      </div>

      <div className="demandListDetail_accepted_body">
        <div className="demandlistDetail_accepted_userContainer">
          <div className="demandlistDetail_accepted_imgDiv">
            <img
              className="demandlistDetail_accepted_img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
            ></img>
          </div>
          <div className="demandlistDetail_accepted_userDiv">
            <h5 className="demandListDetail_accepted_user">{defaultDetail.demandUserId.username}</h5>
          </div>
          <div></div>
        </div>
        <div className="demandListDetail_accepted_dateDiv">
          <h6 className="demandListDetail_accepted_date">{defaultDetail.createdDateTime.split('T')[0]}</h6>
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
            }}>{defaultDetail.demandProduct}</h6>
          </div>
        <div className="demandList_accepted_message">
          <p className="demandList_accepted_messageText">
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
     
        <div className="demandListDetail_accepted_orderContainer">
          <div className="demandListDetail_accepted_orderLabelDiv">
            <label className="demandListDetail_accepted_orderLabel">No of Orders : </label>
          </div>
          <div className="demandListDetail_accepted_orderNoDiv">
              <text className="demandListDetail_accepted_orderNo">20</text>
          </div>
        </div>
        <div className="demandListDetail_accepted_buttonContainer">
        <div className="approved_demandListDetail">
         Approved
         </div>
          
        </div>
      </div>
    </div>:<div>No Approved demands</div>} 
    </div>
  );
}

export default DemandListDetailAccepted;
