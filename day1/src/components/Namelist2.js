import React from "react";

function Namelist2(){
    let names = ["amol","raj","sanjay","sachin"]
    let listName = names.map(names => <h1>{names}</h1>)
    let personlist = [
        {
            id:1,
            firstName:"sayali",
            lastName:"jogi",
            rollNo:34
        },
        {
            id:2,
            firstName:"ashu",
            lastName:"umak",
            rollNo:44
        },
        {
            id:3,
            firstName:"vrushali",
            lastName:"patil",
            rollNo:64
        }
    ]
    personlist = personlist.map((person)=> <h1>My FirstName is {person.firstName} and my lastName is {person.lastName}-{person.rollNo}</h1>)

    return(
    //    <div>
    //         <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //         <h1>{names[3]}</h1>
    //    </div>
    //    names.map((names)=> <h1>{names}</h1>)
    <div>
        {/* {listName} */}
        {personlist}
    </div>
       

    )
}
export default Namelist2