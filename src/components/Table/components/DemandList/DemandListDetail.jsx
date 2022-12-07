import React, { useState, useRef, useEffect } from "react";
import Success from "../../../Message/Success";
import "./DemandListDetail.css";
import lottie from "lottie-web";
import successAnimation from "../../../../Lotties/success.json";
import Rejected from "../../../Message/Rejected";
import { BoltSharp } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import axios from "axios";
import config from "../../../../config/config";
function DemandListDetail({ demandDetail, defaultDetail }) {
  console.log(demandDetail);
  console.log(defaultDetail);
  const [success, setSuccess] = useState(false);
  const [reject, setReject] = useState(false);
  const [token, setToken] = useState();

  //   const date=demandDetail.createdDateTime.split("T")[0];
  //  const time=demandDetail.createdDateTime.split("T")[1].split(".")[0];
  // const [demand, setDemand] = useState({
  //   id: 1,
  //   userName: "Areej Azeem",
  //   date: "24/08/2022",
  //   time: "23:04",
  //   message:
  //     "i want to add a surf excel chotu pak cuz its economical hfhffhbbhfbvhbvbhbv",
  //   orderNo: 20,
  // });
  useEffect(() => {
    getOrderNumber();
  }, []);
  const showSuccessMessage = () => {
    approveDemand();
  };
  const showRejectMessage = () => {
    rejectDemand();
  };
  const getFCMToken = async (id) => {
    console.log(id);
    return await axios({
      method: "get",
      url: config.apiURL + "/users/getUser?id=" + id,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.data) {
          console.log(res.data.data.fcmToken);
        return res.data.data.fcmToken;
          // setToken(res.data.data.fcmToken);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendNotificationAccept = async (res) => {
    const dat = res.data.data;

    console.log(dat);
    await getFCMToken(dat.demandUserId).then((res) => {
      console.log(res);
      axios({
        mode: "no-cors",
        method: "post",
        url: config.apiURL + "/notifications/forDemand",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          demandId: dat.demandId,
          demandProgress: "Accepted",
          message: dat.message,
          createdDateTime: dat.createdDateTime,
          fcm_token: res,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.data) {
          console.log(res.data.data);
          setSuccess(true);
        }
      })
      
    });

   
   
   
  };
  const sendNotificationReject = async (res) => {
    const dat = res.data.data;
    console.log(dat);
    console.log(dat.demandUserId);
  await getFCMToken(dat.demandUserId).then((res) => {
      console.log(res);
      axios({
        mode: "no-cors",
        method: "post",

        url: config.apiURL + "/notifications/forDemand",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          demandId: dat.demandId,
          demandProgress: "Rejected",
          message: dat.message,
          createdDateTime: dat.createdDateTime,
          fcm_token: res,
          // "csq6vUc8QMms8Zi6DbIpbm:APA91bEO9zR_nfVnN3FUOk4ZVaFrPYqhiWgXNN29VC0-02x9mXULtZ7NnhwTb0tAUEAy6qwEkejHEfh88Lmp4f3Z2Az49qCFat3LNEVT9FbVyDcC-zf2qPC1htK9gdGyu4-qY0ESFsD0"
        },
      }).then((res) => {
        console.log(res);
        if (res.data.data) {
          console.log(res.data.data);
          setReject(true);
        }
      })

      });
      

 
    
  };

  const approveDemand = async () => {
    await axios(
      config.apiURL +
        `/demands/demandUpdate?demandId=${
          demandDetail ? demandDetail.demandId : defaultDetail.demandId
        }&progress=Accepted`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      setSuccess(true);
      sendNotificationAccept(res);
    });
  };
  const rejectDemand = async () => {
    await axios(
      config.apiURL +
        `/demands/demandUpdate?demandId=${
          demandDetail ? demandDetail.demandId : defaultDetail.demandId
        }&progress=Rejected`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res);
      setReject(true);
      sendNotificationReject(res);
    });
  };
  const getOrderNumber = async () => {
    await axios(
      config.apiURL +
        `/orders/userOrders?orderUserID=${
          demandDetail
            ? demandDetail.demandUserId.id
            : defaultDetail.demandUserId.id
        }`,
      {}
    ).then((res) => {
      console.log(res.data.data);
    });
  };

  return (
    <div className="demandListDetail">
      {demandDetail ? (
        <div className="demandListDetailWrapper">
          <div className="demandListDetail_body">
            <div className="demandlistDetail_userContainer">
              <div className="demandlistDetail_imgDiv">
                <img
                  className="demandlistDetail_img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
                ></img>
              </div>
              <div className="demandlistDetail_userDiv">
                <h5 className="demandListDetail_user">
                  {demandDetail.demandUserId.username}
                </h5>
              </div>
            </div>
            <div className="demandListDetail_dateDiv">
              <h6 className="demandListDetail_date">
                {demandDetail.createdDateTime.split("T")[0]}
              </h6>
            </div>
            <div className="demandlistDetail_productDiv">
              <h4
                style={{
                  color: "gray",
                  fontSize: "14px",
                  fontWeight: "700",
                  justifyContent: "center",
                  verticalAlign: "middle",
                  marginTop: "6px",
            
                  width:"80px"
                }}
              >
                {" "}
                Product :
              </h4>
              <h6
                style={{
                  color: "black",
                  fontSize: "14px",

                  fontWeight: "400",
                  border: "0.1px solid lightgray",
                  borderRadius: "10px",
                  padding: "8px",
                  verticalAlign: "middle",
                 background: "var(--orangestandard)",
                 backgroundOpacity: "0.5",
                  opacity: 0.9,
                  marginLeft:"-40px",
                  color: "white",
              //    background: "var(--orangestandard)",
              //    backgroundOpacity: "0.5",
                
              //    color: "white",
                }}
              >
                {demandDetail.demandProduct}
              </h6>
            </div>
            <div className="demandList_message">
              <p className="demandList_messageText">{demandDetail.message}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "13px",
                  color: "grey",
                  marginRight: "3px",
                  marginTop: "-6px",
                }}
              >
                {demandDetail.createdDateTime.split("T")[1].split(".")[0]}
              </div>
            </div>
            <div className="demandListDetail_orderContainer">
              <div className="demandListDetail_orderLabelDiv">
                <label className="demandListDetail_orderLabel">
                  No of Orders :{" "}
                </label>
              </div>
              <div className="demandListDetail_orderNoDiv">
                <text className="demandListDetail_orderNo">20</text>
              </div>
            </div>
            <div className="demandListDetail_buttonContainer">
              {success ? (
                <div style={{ marginLeft: "40%", marginRight: "50%" }}>
                  <Success />
                </div>
              ) : (
                <div className="demandListDetail_buttons">
                  {!success && !reject ? (
                    <button className="accept_btn" onClick={showSuccessMessage}>
                      Approve
                    </button>
                  ) : null}
                  {reject ? (
                    <div>
                      <Rejected />
                    </div>
                  ) : (
                    <button className="reject_btn" onClick={showRejectMessage}>
                      Reject
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : defaultDetail ? (
        <div className="demandListDetailWrapper">
          <div className="demandListDetail_header">
            <h4 className="demandListDetail_head">Message</h4>
          </div>

          <div className="demandListDetail_body">
            <div className="demandlistDetail_userContainer">
              <div className="demandlistDetail_imgDiv">
                <img
                  className="demandlistDetail_img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-xWvyG5XvLvCVTQbdwWI6CDW80F1UZES4dXIS3si91RTeS9zs6gxyDAN39JUOe-6xQw&usqp=CAU"
                ></img>
              </div>
              <div className="demandlistDetail_userDiv">
                <h5 className="demandListDetail_user">
                  {defaultDetail.demandUserId.username}
                </h5>
              </div>
              <div></div>
            </div>
            <div className="demandListDetail_dateDiv">
              <h6 className="demandListDetail_date">
                {defaultDetail.createdDateTime.split("T")[0]}
              </h6>
            </div>
            <div className="demandlistDetail_productDiv">
              <h4
                style={{
                  color: "gray",
                  fontSize: "14px",
                  fontWeight: "700",
                  justifyContent: "center",
                  verticalAlign: "middle",
                  marginTop: "6px",
                }}
              >
                {" "}
                Product :
              </h4>
              <h6
                style={{
                  color: "black",
                  fontSize: "14px",

                  fontWeight: "400",
                  justifyContent: "center",
                  border: "0.3px solid gray",
                  borderRadius: "10px",
                  padding: "8px",
                  verticalAlign: "middle",
                  background: "var(--orangestandard)",
                  backgroundOpacity: "0.5",
                  opacity: 0.9,
                  color: "white",
                }}
              >
                {defaultDetail.demandProduct}
              </h6>
            </div>
            <div className="demandList_message">
              <p className="demandList_messageText">{defaultDetail.message}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "13px",
                  color: "grey",
                  marginRight: "3px",
                  marginTop: "-6px",
                }}
              >
                {defaultDetail.createdDateTime.split("T")[1].split(".")[0]}
              </div>
            </div>
            <div className="demandListDetail_orderContainer">
            <div className="demandListDetail_orderLabelDiv">
              <label className="demandListDetail_orderLabel">
                No of Orders :{" "}
              </label>
            </div>
            <div className="demandListDetail_orderNoDiv">
              <text className="demandListDetail_orderNo">20</text>
            </div>
          </div>
            <div className="demandListDetail_buttonContainer">
              {success ? (
                <div style={{ marginLeft: "50%", marginRight: "50%" }}>
                  <Success />
                </div>
              ) : (
                <div className="demandListDetail_buttons">
                  {!success && !reject ? (
                    <button className="accept_btn" onClick={showSuccessMessage}>
                      Approve
                    </button>
                  ) : null}
                  {reject ? (
                    <div>
                      <Rejected />
                    </div>
                  ) : (
                    <button className="reject_btn" onClick={showRejectMessage}>
                      Reject
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DemandListDetail;
