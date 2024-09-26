import React , {Component} from "react";

class EventBind extends Component {

    constructor(){
        super()
        this.state = {
            message:"hello"
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"good bye"
    //     })
    //    // console.log(this)
    // }

    clickHandler =() => {
        this.setState({message:'Goodbye'})
    }
    
    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={ this.clickHandler}>Click</button>
            </div>
        )
    }

}

export default EventBind


// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpnade"
// }

// let amol = {
//     firstName : "amol",
//     lastName :"rao"
// }

// function displayName(){
//     console.log(this.firstName + this.lastName)
// }

// let b = displayName.bind(chinmay)
// displayName.call(chinmay)
// displayName.apply(chinmay)
// b()


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this.firstName + this.lastName)
//         let display2 =()=>{
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }

// info.display()