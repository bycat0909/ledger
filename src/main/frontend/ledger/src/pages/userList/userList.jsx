import React from 'react'
import './userList.css'

import {DataGrid} from "@mui/x-data-grid";

const columns =[
    {field : 'id', headerName : 'ID', width : 70},
    {field : 'username', headerName : 'UserName', width : 130},
    {field : 'email', headerName : 'Email', width : 130},
    {field : 'status', headerName : 'Status', width : 90},
    {field : 'transaction', headerName : 'Transaction', description:'설명', sortable:false ,width : 160},
]

const rows =[
    {id:1, username:'Snow', email:'Snow@gmail.com', status : 'active', transaction : '$120.00'},
    {id:2, username:'Kevin', email:'Kevin@gmail.com', status : 'active', transaction : '$120.00'},
    {id:3, username:'Lucy', email:'Lucy@gmail.com', status : 'active', transaction : '$120.00'},
    {id:4, username:'Jaime', email:'Jaime@gmail.com', status : 'active', transaction : '$120.00'},
    {id:5, username:'Brian', email:'Brian@gmail.com', status : 'active', transaction : '$120.00'},
    {id:6, username:'Jhon', email:'Jhon@gmail.com', status : 'active', transaction : '$120.00'},
    {id:7, username:'Cersei', email:'Cersei@gmail.com', status : 'active', transaction : '$120.00'},
    {id:8, username:'Snow', email:'Snow@gmail.com', status : 'active', transaction : '$120.00'},
    {id:9, username:'Kevin', email:'Kevin@gmail.com', status : 'active', transaction : '$120.00'},
    {id:10, username:'Lucy', email:'Lucy@gmail.com', status : 'active', transaction : '$120.00'},
    {id:11, username:'Jaime', email:'Jaime@gmail.com', status : 'active', transaction : '$120.00'},
    {id:12, username:'Brian', email:'Brian@gmail.com', status : 'active', transaction : '$120.00'},
    {id:13, username:'Jhon', email:'Jhon@gmail.com', status : 'active', transaction : '$120.00'},
    {id:14, username:'Cersei', email:'Cersei@gmail.com', status : 'active', transaction : '$120.00'},
]
export default function UserList(){
    return (
        <div className="userList">
            <DataGrid
                columns={columns}
                rows={rows}
                pageSize={5}
                rowsPerPage={5}
                checkboxSelection
            />
        </div>
    )

}