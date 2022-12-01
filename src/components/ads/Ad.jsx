import React, { useEffect } from "react";
import config from "../../config/config";
import "./ad.css";
function Ad(ad) {
  console.log(ad);
  
  useEffect(() => {
    // console.log("ad");
    
  }, []);
  return (
    <div className="ad">
      <div className="ad_Wrapper">
        <div className="ad_Container">
          <div className="ad_LeftContainer">
            <div className="ad_LeftContainer_title">
              <h5 className="ad_LeftContainer_h1">{ad.ad.advertismentTitle}</h5>
              <h5 style={{
                fontSize: "1.5rem",
                marginTop: "0.1rem",
                marginLeft: "0.3rem",
              }}>!</h5>
            </div>
            <div className="ad_LeftContainer_description">{ad.ad.advertismentDesc}</div>
          </div>
          <div className="ad_RightContainer">
            <div className="ad_RightContainer_imgDiv">
              <img  className="ad-RightContainer_img" src={config.apiURL+ad.ad.advertismentAttachment}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ad;
