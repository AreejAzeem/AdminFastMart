
import React, {useState} from "react";
import DemandList from "../../components/Table/components/DemandList/DemandList";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./AcceptedDemand.css";
import Split from "react-split";
import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
 import { BsArrowLeftCircleFill } from 'react-icons/bs';
import DemandListDetailAccepted from "../../components/Table/components/DemandList/DemandListDetailAccepted";
import { useEffect } from "react";
import axios from "axios";
import config from "../../config/config";



function AcceptedDemand() {
  const [hide, setHide]=useState(true);
  const[classs, setClasss]=useState('acceptedDemand_list_detail');
  const [acceptedDemandList, setAcceptedDemandList]=useState();
  const [acceptedDemandDetail, setAcceptedDemandDetail]=useState();
  var acceptedDefaultDetail={};
  useEffect(()=>{
   getAcceptedDemands();
  },[hide])
  const getAcceptedDemands=async()=>{
    const accepteddemandlist=await axios ({
      method: 'get',
      url: config.apiURL+"/demands/demand",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res)=>{
      console.log(res);
      if(res.data.data){
        console.log(res.data.data);
        var acceptedDemand=res.data.data.filter((item)=>item.demandProgress==='Accepted');
        console.log(acceptedDemand)
        if(acceptedDemand.length>0){
      setAcceptedDemandList(acceptedDemand);}
      else{

        console.log("no accepted demand");
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
  const showDetailPanel=()=>{
    if(hide){
      // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
      //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
    //  document.getElementById('demand_list_detail_id').style.transition='2s';
      console.log("bbbbbbbbbb")
     document.getElementById('acceptedDemand_list_id').style.width='300px';
    

   //  setClasss('demand_list_detail_collapse');
  
    return;
  }
  if(!hide){
    // document.getElementById('demand_list_detail_id').style.display='contents';
     document.getElementById('acceptedDemand_list_id').style.width='400px';

    // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';  
    return;
  }
  }
  return (
    <>
      <div className="acceptedDemand">
        <div className="acceptedDemandWrapper">
          <h2 className="acceptedDemand_title" onClick={showDetailPanel}> Approved Demands</h2>
          <div className="acceptedDemand_list_container">
           
          <div className="acceptedDemand_list" id='acceptedDemand_list_id'>
          { acceptedDemandList ? acceptedDemandList.map((item, index)=>{
                console.log("in line 61 "+index)
                acceptedDefaultDetail=acceptedDemandList[0];
             
              return<div onClick={()=>{
              
                console.log("in line 65 demand"+hide);
                console.log(item);
                setAcceptedDemandDetail(item);
                setHide(true);
                console.log("in line 79 demand"+hide);
                showDetailPanel();
              
              }}> <DemandList key={index} {...item} /></div>
                        }): <div style={{
                          width:'1000px',
                          textAlign:'center',
                          color:'var(--darkestgray)',
                        }}>No demands to show</div>}
          </div>
          
          {hide  && acceptedDemandList && acceptedDefaultDetail && acceptedDemandDetail? 
          <div className={classs} id="acceptedDemand_list_detail_id">
          <div className="acceptedDemand_list_collapser"> 
            <div className="acceptedDemand_list_collapserWrap">
              <BsArrowLeftCircleFill className="acceptedDemand_list_arrowLeft"  size={"60px"} 
              onClick={()=>{
                setHide(false);
                console.log("in line 93 demand"+hide);
                showDetailPanel();
              }}
                />
            </div>
          </div>
          <DemandListDetailAccepted acceptedDemandDetail={acceptedDemandDetail} defaultDetail={acceptedDefaultDetail}/>
          </div>:null
}
         


          </div>
        </div>
      </div>
    </>
  );
}
export default AcceptedDemand;