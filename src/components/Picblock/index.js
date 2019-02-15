import React from "react";
import "./style.css";

function PicBlock (props) {

        return (
            <span onClick={() => {props.click(props.id)}} >
            <div className="img-container container">
           <img
           src={props.image}
           alt={props.name}
           />
           </div>
           </span>
        )
};

export default PicBlock;