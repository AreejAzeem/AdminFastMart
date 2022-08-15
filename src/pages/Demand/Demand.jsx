import React from 'react'
import DemandList from '../../components/Table/components/DemandList/DemandList'

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
function Demand() {
  return (
   
    <>
      <div className="demand">
      <div className="demandWrapper">
        <h2 className="demand_title">Demands</h2>
        <div className="demand_list_container">
         <DemandList/>
          </div>
          </div>
          </div>
  </>
  )
}
export default Demand