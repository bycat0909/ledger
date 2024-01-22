import Toolbar from "./compnent/toolbar/Toolbar"
import Sidebar from "./compnent/sidebar/Sidebar"
import Topbar from "./compnent/topbar/Topbar"
import './App.css'

function App(){
    return(
        <div className="App">
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="others">
                    other Pages
                </div>
            </div>
        </div>
    )
}

export default App