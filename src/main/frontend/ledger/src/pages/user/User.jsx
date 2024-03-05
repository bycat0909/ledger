import React from "react";
import './User.css'
import {CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneIphone, Publish} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function User(){
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
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
                        <span className="userShowTitle">Contact Detail</span>
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
                <div className="userUpdate">
                    <span className ="userUpdateTitle">
                    <form className ="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="hani99"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Arsham Haghani"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="hani@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder="+61 123 345 123"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="Sydney | Australia"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="/img/img.jpg"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{display:'none'}}
                                />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                    </span>
                </div>
            </div>
        </div>
    )
}