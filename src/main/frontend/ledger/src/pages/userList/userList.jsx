import React from 'react'
import './userList.css'

import {DataGrid} from "@mui/x-data-grid";

const columns =[
    {field : 'id', headerName : 'ID', width : 70},
    {
        field : 'user', headerName : 'user', width : 130,
        renderCell : (params) =>{
            return (
                <div>
                    <img src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        },
    },
    {field : 'email', headerName : 'Email', width : 130},
    {field : 'status', headerName : 'Status', width : 90},
    {field : 'transaction', headerName : 'Transaction', description:'설명', sortable:false ,width : 160},
]

const rows =[
    {id:1, username:'Snow', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp' ,email:'Snow@gmail.com', status : 'active', transaction : '$120.00'},
    {id:2, username:'Kevin', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp' ,email:'Kevin@gmail.com', status : 'active', transaction : '$120.00'},
    {id:3, username:'Lucy', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Lucy@gmail.com', status : 'active', transaction : '$120.00'},
    {id:4, username:'Jaime', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Jaime@gmail.com', status : 'active', transaction : '$120.00'},
    {id:5, username:'Brian', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Brian@gmail.com', status : 'active', transaction : '$120.00'},
    {id:6, username:'Jhon', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Jhon@gmail.com', status : 'active', transaction : '$120.00'},
    {id:7, username:'Cersei', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Cersei@gmail.com', status : 'active', transaction : '$120.00'},
    {id:8, username:'Snow', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Snow@gmail.com', status : 'active', transaction : '$120.00'},
    {id:9, username:'Kevin', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Kevin@gmail.com', status : 'active', transaction : '$120.00'},
    {id:10, username:'Lucy', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Lucy@gmail.com', status : 'active', transaction : '$120.00'},
    {id:11, username:'Jaime', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Jaime@gmail.com', status : 'active', transaction : '$120.00'},
    {id:12, username:'Brian', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Brian@gmail.com', status : 'active', transaction : '$120.00'},
    {id:13, username:'Jhon', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Jhon@gmail.com', status : 'active', transaction : '$120.00'},
    {id:14, username:'Cersei', avatar:'https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp',email:'Cersei@gmail.com', status : 'active', transaction : '$120.00'},
]
export default function UserList(){
    return (
        <div className="userList">
            <DataGrid
                pagination
                columns={columns}
                rows={rows}
                pageSize={5}
                rowsPerPageOptions={[5,10,25]}
                checkboxSelection
                editMode={'cell'}
            />
        </div>
    )

}