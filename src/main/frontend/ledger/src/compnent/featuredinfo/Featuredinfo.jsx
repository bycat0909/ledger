import React from 'react'
import './Featuredinfo.css'

export default function Featuredinfo(){
    return(
        <div className="fetured">
            <div className="feturedItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4</span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}