import React from 'react'
import  './Sidebar.css'

import {HomeWork} from "@mui/icons-material";
import {TrendingUp} from "@mui/icons-material";
import {MonetizationOn} from "@mui/icons-material";

export default function sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeWork/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Analystics
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOn/>
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}