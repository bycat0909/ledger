import axios from "axios"
import {useEffect, useState} from "react";
import FullFrame from "./compnent/full/Full"
function App(){
    const [hello, setHello] = useState('');
    const [windowSize, setWindowSize] = useState({
        width : window.innerWidth,
        height: window.innerHeight,
    });
    const handleResize = () => {
        //여기서는 이벤트가 동작함
        console.log("Testr");
        setWindowSize({
            width : window.innerWidth,
            height: window.innerHeight,
        });
    };
/*
    화면은 최소 가로 1536 최대 3440
    최소 세로 864 최대 1440

    기준은 1536 x 864
    사이트 이미지는 1024 768 혹은 840 500
 */
    useEffect(() => {
        console.log(handleResize);
        window.addEventListener("resize", handleResize);
        return () => {
            // cleanup
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <FullFrame item={windowSize}>
        </FullFrame>
    )
}

export default App