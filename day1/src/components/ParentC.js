import React , {Component} from "react";
import ChildC from "./ChildC";
class ParentC extends Component {

    constructor(){
        super()
        this.state = {
            parentName:'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`disney hotstar ${this.state.parentName}`)
            
        }
    
    render(){
        return(
            <div>
                <ChildC greetHandler = {this.greetParent}></ChildC>
            </div>
        )
    }
}
export default ParentC

