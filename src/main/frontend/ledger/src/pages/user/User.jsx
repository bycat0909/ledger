import React from "react";
import './User.css'
import {CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneIphone} from "@mui/icons-material";

export default function User(){
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                                src="/img/img.jpg"
                                alt=""
                                className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">최민성</span>
                            <span className="userShowUserTitle">유치원생</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className ="userShowIcon"/>
                            <span className ="userShowIconTitle">hani99</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className ="userShowIcon"/>
                            <span className ="userShowIconTitle">25.12.2000</span>
                        </div>
                        <span className="Contact Details"></span>
                        <div className="userShowInfo">
                            <PhoneIphone className ="userShowIcon"/>
                            <span className ="userShowIconTitle">01091588840</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className ="userShowIcon"/>
                            <span className ="userShowIconTitle">bycat0702@naver.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationOn className ="userShowIcon"/>
                            <span className ="userShowIconTitle">Sydeny | Australa</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">update</div>
            </div>
        </div>
    )
}