import React from "react"
import "./Header.css"

function Header(props){
    
    return(
        <div className="Header">
            <input type="text" name="Toptext" value={props.Toptext} onChange={(e)=>props.Edit(e.target.value)} placeholder="Enter Top text" /><br />
            <input type="text" name="Bottomtext" value={props.Bottomtext} onChange={(e)=>props.Edit1(e.target.value)} placeholder="Enter Bottom text"/><br />
        </div>
    )
}

export default Header