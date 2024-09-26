import React from "react";
import './MyStyleR.css'
function MyStyleR(props){
    let className = props.nm  //six
    return(
        <div>
            <h1 className={className}>Apple</h1>
        </div>
    )
}
export default MyStyleR
