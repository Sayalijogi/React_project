//Step 1
import React , {Component} from "react";

class EventBindR extends Component {

    constructor(){
        super()
        this.state = {
            message:"Hello"
        }
        //
        // this.clickHandler = this.clickHandler.bind(this)
    }

    ///Arrow function se this ki value undefined aa rahi thi toh upper mein this ki value bind kar di
    //  clickHandler(){
    //     this.setState({
    //         message:"Welcome to Pune!"
    //     })
    // }

    //step 2
    clickHandler =() =>{
        this.setState({
            message:"Welcome to Mumbai"
        })
    }


    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={this.clickHandler}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default EventBindR


// bind , call , apple

// let info1 = {
//     fn:"amol",
//     ln:"rao"
// }


// let info2 = {
//     fn:"chinmay",
//     ln:"deshpande"
// }

// function displayName(){
//     console.log(this.fn  + this.ln)
// } 
// displayName()

// displayName = displayName.bind(info1)
// displayName()

// // function displayName(){
// //     console.log(info1.fn  + info1.ln)
// // } 
// // displayName()
// displayName.call(info1)
// displayName.call(info2,"hello")
// displayName.call(info2,[])
