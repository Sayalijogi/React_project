import React from "react";
function Person({person}){
    return (
        <div>
           <h1> My firstName is {person.firstName} and my lastName is {person.lastName}-{person.rollNo}</h1>
        </div>
    )

}

export default Person