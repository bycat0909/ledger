import axios from "axios"
import React, {useEffect, useState} from "react";
import SideBar from "./compnent/sidebar/Sidebar";
import ContenstsFrame from "./compnent/contents/Contents";
import "./App.css"

function App(){
    const [windowSize, setWindowSize] = useState({
        cont : "cont_full",
        sideBar : "sideBar_full",
        frame : "frame_full"
    });
    const handleResize = () => {
        //여기서는 이벤트가 동작함
        setWindowSize({
            cont :"cont_full",
            sideBar: "sideBar_full",
            frame: "frame_full"
        });
    };
/*
    화면은 최소 가로 1536 최대 3440
    최소 세로 864 최대 1440
    기준은 1536 x 864
    사이트 이미지는 1024 768 혹은 840 500(고정임)
 */
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, );

    return(
        <div className={windowSize.frame}>
            <SideBar item={windowSize}/>
            <ContenstsFrame item={windowSize}/>
        </div>
    )
}

export default App