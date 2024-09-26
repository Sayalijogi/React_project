import React  from "react";

let heading = {
    color:"green",
    border:"1px solid green",
    fontSize:40
}
function InlineR(){
  return(
    <div>
        <h1 style={heading}>Hello</h1>
        <h1 className="five">Hello</h1>
        {/* <h1 className={StyleT.eight}>Hello</h1> */}
    </div>
  ) 

}

export default InlineR