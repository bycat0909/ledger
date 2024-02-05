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
                    <img src="https://i.namu.wiki/i/HJ3xgUeiMGIHuGwYEUTiktHGi7kx60RxZT-k0ocNeDC41Kd7cE2Wx-4hdrwQNc6yGcUA73CAhRrgSI3aNwoI44rMZweNic-twoAtKlUfjtH4QSdqZe2pboBqjHg5tcM6bXxcmJLVtRwhh64eoocXnQ.webp"
                         alt=""
                         className="topAvatar"
                    />
                </div>
            </div>
        </div>
    )
}