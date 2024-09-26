import React from "react"

const ComponentJSX = ()=>{
    // return (
    //     <div className="one">
    //         <h1>Hello Sayali</h1>
    //     </div>
    // )

    return React.createElement('div',{id:'hello',className:'one'},
    React.createElement('h1',null,"Hello World"))
}

export default ComponentJSX