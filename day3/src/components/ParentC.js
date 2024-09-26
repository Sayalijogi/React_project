import React, {Component} from "react";
import PureC from "./PureC";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";


class ParentC extends Component {
    constructor(props){
        super(props)
            this.state = {
                name:"Sayali"
            }
        }
        componentDidMount(){
            setInterval(()=>{
                this.setState({
                    name:"Sayali"
                })
            },2000)
        }
        render(){
            console.log("Parent component render *******************************")
            return(
                <div>
                    <MemoComp name={this.state.name}></MemoComp>
                    {/* <RegComp name = {this.state.name}></RegComp> */}
                    {/* <PureC name = {this.state.name}></PureC> */}
                </div>
            )
        }
    }

export default ParentC