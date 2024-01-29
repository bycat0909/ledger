import Sidebar from "./compnent/sidebar/Sidebar"
import Topbar from "./compnent/topbar/Topbar"
import Home from "./pages/home/Home"
import './App.css'
import UserList from "./pages/userList/userList"
import {BrowserRouter} from "react-router-dom";

function App(){
    return(
        <div className="App">
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Home/>
            </div>
        </div>
    )
}

export default App