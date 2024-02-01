import React from 'react'
import './userList.css'

import {DataGrid} from "@mui/x-data-grid";

const columns =[
    {field : 'id', headerName : 'ID', width : 70},
    {field : 'firstName', headerName : 'First Name', width : 130},
    {field : 'lastName', headerName : 'Last Name', width : 130},
    {field : 'age', headerName : 'Age', type: 'number', width : 90},
    {field : 'fullName', headerName : 'Full Name', description:'설명', sortable:false ,width : 160},
]

const rows =[
    {id:1, lastName:'Snow', firstName:'jon', age : 35},
    {id:1, lastName:'Lannister', firstName:'Cersei', age : 35},
    {id:1, lastName:'Lannister', firstName:'Jaime', age : 35},
    {id:1, lastName:'Stark', firstName:null, age : 35},
    {id:1, lastName:'Targaryen', firstName:'Ferrara', age : 35},
    {id:1, lastName:'Frances', firstName:'Rossini', age : 35},
    {id:1, lastName:'Roxie', firstName:'Harvey', age : 35},
]
export default function UserList(){
    return (
        <div className="userList">
            <DataGrid
                columns={columns}
                rows={rows}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )

}