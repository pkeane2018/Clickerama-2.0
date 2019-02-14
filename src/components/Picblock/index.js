import React, { Component } from "react";
import "./style.css";

class PicBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }
    render() {
        return (
            <div className="img-container container">
           <img
           src={this.props.image}
           alt={this.props.name}
           />
           </div>
        )
    }


};

export default PicBlock;