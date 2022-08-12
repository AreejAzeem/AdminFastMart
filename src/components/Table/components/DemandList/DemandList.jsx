import React from 'react'
import { List, Datagrid, TextField } from 'react-admin';

function DemandList(props) {
  return (
    <div>
         <div> <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
    </Datagrid>
</List></div>
    </div>
  )
}

export default DemandList