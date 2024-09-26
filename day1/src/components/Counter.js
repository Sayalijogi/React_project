import React ,{Component} from "react";

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter:0
        }
    }

    increment(){
        // this.state = {
        //     counter:this.state.counter + 1
        // }

        this.setState({
            counter:this.state.counter + 1
        },()=>{
            console.log(this.state.counter)
        })

        // console.log(this.state.counter)

    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.increment()}>Increase</button>
            </div>
        )
    }
}
export default Counter