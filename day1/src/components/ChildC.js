import React from "react";

let ChildC = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={()=>props.greetHandler()}>greetParent</button>
        </div>
    )
}
export default ChildC