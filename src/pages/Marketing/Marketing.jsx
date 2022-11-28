import React, { useEffect, useState } from "react";
import "./marketing.css";
import Ad from "../../components/ads/Ad.jsx";
import { useNavigate } from "react-router-dom";
import Offer from "../../components/Offers/Offer";
import axios from "axios";
import config from "../../config/config";

function Marketing() {
  const [length, setLength] = useState(9);
  const [ads, setAds] = useState([]);
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    getOffers();
    getAds();
  }, []);
  const getAds = async () => {
    await axios({
      method: "get",
      url: config.apiURL + "/advertisments/ads",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setLength(res.data.data.length);
       console.log(res.data.data[0])
        setAds(res.data.data);
        console.log(ads);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOffers = async () => {
    await axios({
      method: "get",
      url: config.apiURL + "/advertisments/offers",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.data);
      setLength(res.data.length);
      setOffers(res.data.data);
      console.log(offers);
    });
  };
  const navigate = useNavigate();
  return (
    <div className="marketing">
      <div className="marketingWrapper">
        <div className="marketing_adsHeader">
          <div className="marketing_adsHeader_h1">Advertisement</div>
          <button
            className="createAd_btn"
            onClick={() => {
              navigate("/marketing/createAd");
            }}
          >
            Create Advertisement
          </button>
        </div>
        <div className="marketing_adsContainer">
          <div className="marketing_adsContainer_wrapper">
            <div>
              <div>
                <h5
                  style={{
                    color: "var(--primary-color)",
                  }}
                >
                  Ads
                </h5>
              </div>
              <div className="marketing_adsContainer_div">
                <div
                  className={
                    length <= 6
                      ? ""
                      : "homePage_bottomContain_productSection_adDiv_Scroll"
                  }
                >
                  {ads ? 
                  <div>
                    {ads.map((ad) => {
                      return (
                        <Ad

                          ad={ad}
                        />
                      );
                    })
                  }
                  </div>:<div>No ads to show</div>}
                   
                  
                </div>
              </div>
            </div>
            <div className="marketing_offerContainer_div">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
