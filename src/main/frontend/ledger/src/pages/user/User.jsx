import React from "react";
import './User.css'

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
                    <div className="userShowBottom"></div>
                </div>
                <div className="userUpdate">update</div>
            </div>
        </div>
    )
}