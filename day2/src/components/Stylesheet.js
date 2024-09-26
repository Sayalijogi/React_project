//CSS style
//inline style
//css modules

import React from "react";
import './Style.css'


function Stylesheet(props){
    //console.log(props.name)
    let className = props.name === "one"?"one":"two"
    return (
        <div>
            <h1 className={`${className} three `}>Style</h1>
        </div>
    )
}
export default Stylesheet

