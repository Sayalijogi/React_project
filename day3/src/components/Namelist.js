import React from "react";

let students = [
    {
        "id":1,
        "firstName":"Sayali",
        "lastName":"Jogi"
    },
    {
        "id":2,
        "firstName":"Ashu",
        "lastName":"Umak"
    },
    {
        "id":3,
        "firstName":"chinmay",
        "lastName":"Deshpande"
    }
]

function NameList(){
    const names = ["sayali","ashu","vrushali","kabir","chinmay"]
    const namesList = names.map((el,index)=><h2 key={index}>{el}</h2>)
    return <div>{namesList}</div>
}
export default NameList
