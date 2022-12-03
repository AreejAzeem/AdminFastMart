import React, { useState, useEffect } from "react";
import DemandList from "../../components/Table/components/DemandList/DemandList";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./RejectedDemand.css";
import Split from "react-split";
import axios from "axios";
import config from "../../config/config";
import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import DemandListDetailRejected from "../../components/Table/components/DemandList/DemandListDetailRejected";

function RejectedDemand() {
  const [hide, setHide] = useState(true);
  const [classs, setClasss] = useState("demand_list_detail");
  const [rejectedDemandList, setRejectedDemandList]=useState();
  const [rejectedDemandDetail, setRejectedDemandDetail]=useState();
  var rejectedDefaultDetail;
  useEffect(()=>{
    getRejectedDemands();
   },[hide])
   const getRejectedDemands=async()=>{
     const rejectedemandlist=await axios ({
       method: 'get',
       url: config.apiURL+"/demands/demand",
       headers: {
         'Content-Type': 'application/json',
       }
     }).then((res)=>{
       console.log(res);
       if(res.data.data){
         console.log(res.data.data);
         var rejectedDemand=res.data.data.filter((item)=>item.demandProgress==='Rejected');
         console.log(rejectedDemand)
         if(rejectedDemand.length>0){
          console.log("rejected demnad")
       setRejectedDemandList(rejectedDemand);}
       else{
        console.log("no rejected demand");
       }
       // console.log("in ln2 35")
       // console.log(demandList);
       }
     })
     // if(accepteddemandlist){
     //   console.log(accepteddemandlist.data.data);
     //   var accepted=accepteddemandlist.data.data;
     //   var acceptedDemand=accepted.filter((item)=>item.demandProgress==='Accepted');
     //   setAcceptedDemandList(acceptedDemand);
     // }
   }
  const showDetailPanel = () => {
    if (hide) {
      // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
      //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
      //  document.getElementById('demand_list_detail_id').style.transition='2s';
      console.log("in hide true")
      document.getElementById("rejectedDemand_list_id").style.width = "300px";
  
      //  setClasss('demand_list_detail_collapse');
    
      return;
    }
   else {
      console.log("in hide false")
      // document.getElementById('demand_list_detail_id').style.display='contents';
      document.getElementById("rejectedDemand_list_id").style.width = "400px";
    

      // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';
  
      return;
    }
  };
  return (
    <>
      <div className="rejectedDemand">
        <div className="rejectedDemandWrapper">
          <h2 className="rejectedDemand_title" onClick={showDetailPanel}>
            {" "}
            Rejected Demands
          </h2>
          <div className="rejectedDemand_list_container">
            <div className="rejectedDemand_list" id="rejectedDemand_list_id">
            { rejectedDemandList ? rejectedDemandList.map((item, index)=>{
                console.log("in line 61 "+index)
                rejectedDefaultDetail=rejectedDemandList[0];
              console.log(rejectedDefaultDetail)
              return<div onClick={()=>{
              
                console.log("in line 65 demand"+hide);
                console.log(item);
                setRejectedDemandDetail(item);
                setHide(true);
                console.log("in line 79 demand"+hide);
                showDetailPanel();
              
              }}> <DemandList key={index} {...item} /></div>
                        }):<div style={{
                          width:'1000px',
                          textAlign:'center',
                          color:'var(--darkestgray)',
                        }}>No demands to show</div>}
            </div>

            {(hide  && rejectedDefaultDetail) && (rejectedDemandList && rejectedDemandDetail) ? (
              <div className={classs} id="rejectedDemand_list_detail_id">
                <div className="acceptedDemand_list_collapser">
                  <div className="rejectedDemand_list_collapserWrap">
                    <BsArrowLeftCircleFill
                      className="rejectedDemand_list_arrowLeft"
                      size={"60px"}

                      onClick={()=>{
                     setHide(false);
                     console.log("in line 93 demand"+hide);
                     showDetailPanel();}}
                    />
                  </div>
                </div>
                <DemandListDetailRejected  rejectedDemandDetail={rejectedDemandDetail} defaultDetail={rejectedDefaultDetail}/>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default RejectedDemand;
