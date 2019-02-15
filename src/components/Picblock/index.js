import React, { Component } from "react";
import "./style.css";

class PicBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    };

    componentDidMount(){
        console.log(this.props.name + ":" + this.state.clicked)
    };

    componentDidUpdate(){
        console.log(this.props.name + ":" + this.state.clicked)
    };

    render() {

        return (
            <span onClick={() => {this.props.click()}} >
            <div className="img-container container" onClick={this.click}>
           <img
           src={this.props.image}
           alt={this.props.name}
           />
           </div>
           </span>
        )
    }

};

export default PicBlock;