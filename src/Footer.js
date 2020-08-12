import React from "react"
import "./Footer.css"

function Footer(props){
    return(
        <div className="foot">
            <div className="subfoot">
                <center>
            <h1 style={{backgroundImage: `url(${props.image})`}}id="memes">{props.Top}</h1>
            <h1 style={{top :"680px",position:"absolute",marginLeft:"25px"}}>{props.Bot}</h1>
            </center>
            </div>
        </div>
    )
}

export default Footer