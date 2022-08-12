import React from 'react'
import DemandList from '../../components/Table/components/DemandList/DemandList'

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
function Demand() {
  return (
   <div>
    <Admin dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={DemandList} />
    </Admin>
   </div>
  )
}
export default Demand