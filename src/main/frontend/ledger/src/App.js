import Sidebar from "./compnent/sidebar/Sidebar"
import Topbar from "./compnent/topbar/Topbar"
import Home from "./pages/home/Home"
import './App.css'
import UserList from "./pages/userList/userList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import axios from "axios"
import {useEffect, useState} from "react";
function App(){
    const [hello, setHello] = useState('');
    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);

    return(
        <Router>
            <Topbar/>
            <div className="App">
                백엔드 데이터 : {hello}
            </div>
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