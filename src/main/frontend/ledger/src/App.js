import Sidebar from "./compnent/sidebar/Sidebar"
import Topbar from "./compnent/topbar/Topbar"
import Home from "./pages/home/Home"
import './App.css'
import UserList from "./pages/userList/userList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
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
                    <Route path="/newUser" element={<NewUser/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App