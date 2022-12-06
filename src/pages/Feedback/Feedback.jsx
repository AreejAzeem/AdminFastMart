

import React, { useEffect, useState } from "react";
import "./feedback.css";
import Ad from "../../components/ads/Ad.jsx";
import { useNavigate } from "react-router-dom";
import Offer from "../../components/Offers/Offer";
import axios from "axios";
import config from "../../config/config";
import Complaint from "../../components/complain/Complaint";

function Feedback() {
  const [length, setLength] = useState(9);
  const [complaints, setComplaints] = useState([]);
  
  useEffect(() => {
   
    getComplaints();
  }, []);
  const getComplaints = async () => {
    await axios({
      method: "get",
      url: config.apiURL + "/complaints/complaint",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setLength(res.data.data.length);
       console.log(res.data.data);
     setComplaints(res.data.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  const navigate = useNavigate();
  return (
    <div className="Feedback">
      <div className="FeedbackWrapper">
        <div className="Feedback_adsHeader">
          <div className="Feedback_adsHeader_h1">Customer Feedback</div>
          
        </div>
        <div className="Feedback_adsContainer">
          <div className="Feedback_adsContainer_wrapper">
            <div style={{
                width: "100%",
                marginLeft: "20%",
                marginRight: "20%",
            }}>
              <div>
                <h5
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  
                </h5>
              </div>
              <div className="Feedback_adsContainer_div">
                <div
                  className={
                    length <= 5
                      ? ""
                      : "homePage_bottomContain_productSection_feedbackDiv_Scroll"
                  }
                >
                  {complaints ? 
                  <div>
                    {complaints.map((complaint) => {
                      return (
                        <Complaint complaint={complaint}/>
                      );
                    })
                  }
                  </div>:<div>No feedback to show</div>}
                   
                  
                </div>
              </div>
            </div>
            {/* <div className="Feedback_offerContainer_div">
              <div>
                <div>
                  <h5
                    style={{
                      color: "var(--primary-color)",
                    }}
                  >
                    Offers
                  </h5>
                </div>
                <div
                  className={
                    length <= 2
                      ? ""
                      : "homePage_bottomContain_productSection_offerDiv_Scroll"
                  }
                >
                  <div
                    style={{
                      marginLeft: "0.5rem",
                    }}
                  >
                    {offers
                      ? offers.map((offer) => <Offer offer={offer} />)
                      : null}
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
