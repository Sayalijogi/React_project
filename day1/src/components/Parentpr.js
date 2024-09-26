import React , {Component} from "react";
import Childcr from "./Childcr";
class Parentpr extends Component {
    constructor(){
        super()
        this.state = {
            parentName:"parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(x){
        alert(`${this.state.parentName} ${x}`)
    }

    render(){
        return(
            <div>
                <Childcr greetHandler={this.greetParent}></Childcr>
            </div>
        )
    }
}
export default Parentpr

