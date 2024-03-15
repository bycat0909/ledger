import "./Contents.css"
import Site from "../site/Site"
export default function ContenstsFrame(props){
    return(
        <div className={props.item.cont}>
            <Site/>
        </div>
    )
}
