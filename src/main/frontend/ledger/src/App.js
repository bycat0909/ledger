import Sidebar from "./compnent/sidebar/Sidebar"
import Topbar from "./compnent/topbar/Topbar"
import Home from "./pages/home/Home"
import './App.css'
import UserList from "./pages/userList/userList"
import User from "./pages/user/User"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
    return(
        <Router>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/users" element={<UserList/>}/>
                    <Route path="/user/:userId" element={<User/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App