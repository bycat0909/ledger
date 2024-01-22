import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">BycatAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">3</span>
                    </div>

                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://i.namu.wiki/i/AnluHKfNM2R27ULCDt9ha1LqgI5gs98FzkU6C4K-x0ujxhmedmM6_3HmUeLmMLeYS1_S8GNQxle-tffmR-Z2P_g_qd6XL7E2iG4Vl-J9nonVo5BUP-medGFuNu0W7dEip9dV_i0UgCDDZ8smX26qcQ.webp"
                         alt=""
                         className="topAvatar"
                    />
                </div>
            </div>
        </div>
    )
}