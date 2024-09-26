import React , {Component} from "react";

class UserGreeting extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn:true
        }
    }

    //if - else approach
    // render(){
    //     if(this.state.isLoggedIn){
    //         return <div>Welcome sayali</div>
    //     }
    //     else {
    //         return <div>Welcome Ashu</div>
    //     }
    // }

    //element variable approach

    // render(){
    //     let message = undefined
    //     if(this.state.isLoggedIn){
    //         message = <div>Welcome Sayali</div>
    //     }
    //     else {
    //         message = <div>Welcome User</div>
    //     }
    //     return <div>{message}</div>
    // }

    //ternary - operator - approach

    // render(){
    //     return this.state.isLoggedIn ?<div>Welcome sayali</div>:<div>Welcome Ashu</div>
    // }

    //short-circuit
    render(){
        return this.state.isLoggedIn && <div>Welcome Sayali</div>
    }

    // render(){
    //     return(
    //         <div>
    //             <div>Welcome Sayali</div>
    //             <div>Welcome Ashu</div>
    //         </div>
    //     )
    // }
}


export default UserGreeting
