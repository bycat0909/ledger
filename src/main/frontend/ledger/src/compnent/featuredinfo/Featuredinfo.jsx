import React from 'react'
import './Featuredinfo.css'
import {ArrowDownward} from "@mui/icons-material";
import {ArrowUpward} from "@mui/icons-material";


export default function Featuredinfo(){
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Salse</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,213</span>
                    <span className="featuredMoneyRate">
                        +11.4<ArrowUpward className ="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,234</span>
                    <span className="featuredMoneyRate">
                        +15.3<ArrowUpward className ="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}