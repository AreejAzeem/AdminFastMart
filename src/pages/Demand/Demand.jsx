
import React, {useState, useRef} from "react";
import DemandList from "../../components/Table/components/DemandList/DemandList";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./Demand.css";
import Split from "react-split";
import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
 import { BsArrowLeftCircleFill } from 'react-icons/bs';
import ArrowLeft from "../../components/Message/ArrowLeft";
import { useEffect } from "react";
import config from "../../config/config"
import axios from "axios";
import { SettingsInputHdmiRounded } from "@mui/icons-material";

function Demand() {
  const [hide, showDiv]=useState(true);
  const [demandDetail, setDemandDetail]=useState();
  const[classs, setClasss]=useState('demand_list_detail');
  const [demandList, setDemandList]=useState();
 const animation=useRef(null);
var defaultDetail={}
const getDetail=async()=>{
  const demandlist=await axios ({
    method: 'get',
    url: config.apiURL+"/demands/demand",
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res)=>{
    console.log(res);
    if(res.data.data){
      console.log(res.data.data);
      var pendingDemand=res.data.data.filter((item)=>item.demandProgress==='Pending' || item.demandProgress==='pending');
      console.log(pendingDemand)
      if(pendingDemand.length>0){
    setDemandList(pendingDemand);
    showDiv(true);}
    else{
      console.log("no pending demand");
    }
    // console.log("in ln2 35")
    // console.log(demandList);
    }
  }
  )


  // if(demandlist){
  //   console.log(demandlist.data.data);
  //   var Demands=demandlist.data.data;
  //   var pendingDemand=Demands.filter((item)=>item.demandProgress==='Pending');
  //   setDemandList(pendingDemand);
  //   console.log("in ln2 35")
  //   console.log(demandList);
  
  // }
}
useEffect(()=>{
 getDetail();


 },[])
  const showDetailPanel=(e)=>{
    if(hide){
      // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
      //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
    //  document.getElementById('demand_list_detail_id').style.transition='2s';
 // setClasss('demand_list_animation');
 console.log("in hide true")
     document.getElementById('demand_list_id').style.width='400px';
  //   setClasss('demand_list_animation');
   //  setClasss('demand_list_detail_collapse');
   
    return;
  }
  if(!hide){
    // document.getElementById('demand_list_detail_id').style.display='contents';
   // setClasss('demand_list_animation');
   console.log("in hide false")
     document.getElementById('demand_list_id').style.width='400px';
    // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';
    
    return;
  } 
}
  return (
    <>
      <div className="demand" >
        <div className="demandWrapper">
          <h2 className="demand_title" onClick={()=>{
            // showDiv(!hide);
            // showDetailPanel();
            }}>Demands</h2>
          <div className="demand_list_container">  
          <div className="demand_list" id='demand_list_id'>
            { demandList ?
             demandList.map((item, index)=>{
                console.log("in line 61 "+index)
             defaultDetail=demandList[0];
             console.log(defaultDetail);
              return<div onClick={()=>{
                console.log("in line 65 demand")
                console.log(item);
                setDemandDetail(item);
                showDiv(true);
                showDetailPanel();  
              }}> <DemandList key={index} {...item} /></div>
                        })
                        :
                        <div style={{
                          width:'1000px',
                          textAlign:'center',
                          color:'var(--darkestgray)',
                        }}>No demands to show</div>
                        }
          </div> 
          {
      hide
       && 
      demandDetail 
      && defaultDetail
       
       ? 
          <div className={classs} id="demand_list_detail_id" >
          <div className="demand_list_collapser">
            <div className="demand_list_collapserWrap" onClick={showDetailPanel}>
              {/* <BsArrowLeftCircleFill className="demand_list_arrowLeft"  size={"60px"} onClick={showDetailPanel}
              /> */}
              <ArrowLeft  showDiv={showDiv}/>
            </div>
          </div>
          <DemandListDetail demandDetail={demandDetail} defaultDetail={defaultDetail} />
          </div>
          : 
        null
}    </div>
        </div>
      </div>
    </> );
}export default Demand;
//////////////////////////////
// import React, {useState} from "react";
// import DemandList from "../../components/Table/components/DemandList/DemandList";
// import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
// import "./Demand.css";
// import Split from "react-split";
// import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
//  import { BsArrowLeftCircleFill } from 'react-icons/bs';



// function Demand() {
//   const [hide, showDiv]=useState(true);
//   const[classs, setClasss]=useState('demand_list_detail');
//   const showDetailPanel=()=>{
//     if(hide){
//       // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
//       //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
//     //  document.getElementById('demand_list_detail_id').style.transition='2s';

//      document.getElementById('demand_list_id').style.width='80%';
//    //  setClasss('demand_list_detail_collapse');
//     showDiv(false);
//     return;
//   }
//   if(!hide){
//     // document.getElementById('demand_list_detail_id').style.display='contents';
//      document.getElementById('demand_list_id').style.width='50%';
//     // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';
//     showDiv(true);
//     return;
//   }

//   }
//   return (
//     <>
//       <div className="demand">
//         <div className="demandWrapper">
//           <h2 className="demand_title" onClick={showDetailPanel}>Demands</h2>
//           <div className="demand_list_container">
           
//           <div className="demand_list" id='demand_list_id'>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//             <DemandList/>
//           </div>
          
//           {hide? 
//           <div className={classs} id="demand_list_detail_id">
//           <div className="demand_list_collapser">
           
//             <div className="demand_list_collapserWrap">
//               <BsArrowLeftCircleFill className="demand_list_arrowLeft"  size={"60px"} onClick={showDetailPanel}/>
//             </div>
//           </div>
//           <DemandListDetail/>
//           </div>:null
// }
         


//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Demand;
