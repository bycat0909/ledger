import React from 'react'
import './userList.css'

import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@mui/icons-material";

const columns =[
    {field : 'id', headerName : 'ID', width : 70},
    {
        field : 'user', headerName : 'user', width : 130,
        renderCell : (params) =>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        },
    },
    {field : 'email', headerName : 'Email', width : 130},
    {field : 'status', headerName : 'Status', width : 90},
    {field : 'transaction', headerName : 'Transaction', description:'설명', sortable:false ,width : 160},
    {field : 'action', headerName : 'Action', width : 150,
        renderCell : ()=>{
            return(
                <>
                    <dutton className ="userListEdit">Edit</dutton>
                    <DeleteOutline className ='userListDelete'/>
                </>
            )
        }
    },

]

const rows =[
    {id:1, username:'Snow', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp' ,email:'Snow@gmail.com', status : 'active', transaction : '$120.00'},
    {id:2, username:'Kevin', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp' ,email:'Kevin@gmail.com', status : 'active', transaction : '$120.00'},
    {id:3, username:'Lucy', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Lucy@gmail.com', status : 'active', transaction : '$120.00'},
    {id:4, username:'Jaime', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Jaime@gmail.com', status : 'active', transaction : '$120.00'},
    {id:5, username:'Brian', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Brian@gmail.com', status : 'active', transaction : '$120.00'},
    {id:6, username:'Jhon', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Jhon@gmail.com', status : 'active', transaction : '$120.00'},
    {id:7, username:'Cersei', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Cersei@gmail.com', status : 'active', transaction : '$120.00'},
    {id:8, username:'Snow', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Snow@gmail.com', status : 'active', transaction : '$120.00'},
    {id:9, username:'Kevin', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Kevin@gmail.com', status : 'active', transaction : '$120.00'},
    {id:10, username:'Lucy', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Lucy@gmail.com', status : 'active', transaction : '$120.00'},
    {id:11, username:'Jaime', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Jaime@gmail.com', status : 'active', transaction : '$120.00'},
    {id:12, username:'Brian', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Brian@gmail.com', status : 'active', transaction : '$120.00'},
    {id:13, username:'Jhon', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Jhon@gmail.com', status : 'active', transaction : '$120.00'},
    {id:14, username:'Cersei', avatar:'https://i.namu.wiki/i/zr_c5Elw2ABSiwGgDnyF-0LAF0HvJIiYyn_H374u6NZJ-Etso0RkdQD1cNC69EZ2QIQWo1k_OFFaO4N-huibx8TRBp8a1fwtvkGOO8zNNMln1h-9cVlHAJv1WwPxfzcaBixlcdL71O4fR308JeUVWw.webp',email:'Cersei@gmail.com', status : 'active', transaction : '$120.00'},
]
export default function UserList(){
    return (
        <div className="userList">
            <DataGrid
                rows={rows}
                disableSelectionOnClick
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5, page: 0 },
                    },
                }}
                pageSize={10}
                rowsPerPageOptions={[5,10,20]}
                checkboxSelection
                editMode={'cell'}
            />
        </div>
    )

}