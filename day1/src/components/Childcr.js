import React from "react";

let Childcr = function(props){
    return(
        <button onClick={()=>props.greetHandler("sayali")}>GreetButton</button>
    )
}
export default Childcr

