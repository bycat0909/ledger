import React from 'react'
import './NewUser.css'

export default function newUser(){
    return (
        <div className="newUser">
            <hi className="newUserList">New User </hi>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder="john"/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="john Smith"/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder="john@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="text" placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+61 123 123 123"/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Central | Australia"/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label For="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label For="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label For="male">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}