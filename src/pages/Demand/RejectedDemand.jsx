import React, { useState } from "react";
import DemandList from "../../components/Table/components/DemandList/DemandList";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./RejectedDemand.css";
import Split from "react-split";
import DemandListDetail from "../../components/Table/components/DemandList/DemandListDetail";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import DemandListDetailRejected from "../../components/Table/components/DemandList/DemandListDetailRejected";

function RejectedDemand() {
  const [hide, showDiv] = useState(true);
  const [classs, setClasss] = useState("demand_list_detail");
  const showDetailPanel = () => {
    if (hide) {
      // document.getElementById('demand_list_detail_id').style.transformOrigin= '0 50%';
      //  document.getElementById('demand_list_detail_id').style.transition='transform 3s';
      //  document.getElementById('demand_list_detail_id').style.transition='2s';

      document.getElementById("demand_list_id").style.width = "80%";
      //  setClasss('demand_list_detail_collapse');
      showDiv(false);
      return;
    }
    if (!hide) {
      // document.getElementById('demand_list_detail_id').style.display='contents';
      document.getElementById("demand_list_id").style.width = "50%";
      // document.getElementById('demand_list_detail_id').style.border='1px solid var(--darkergray)';
      showDiv(true);
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
              <DemandList />
              <DemandList />
              <DemandList />

              <DemandList />
            </div>

            {hide ? (
              <div className={classs} id="rejectedDemand_list_detail_id">
                <div className="acceptedDemand_list_collapser">
                  <div className="rejectedDemand_list_collapserWrap">
                    <BsArrowLeftCircleFill
                      className="rejectedDemand_list_arrowLeft"
                      size={"60px"}
                      onClick={showDetailPanel}
                    />
                  </div>
                </div>
                <DemandListDetailRejected />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
export default RejectedDemand;
