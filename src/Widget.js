import React from "react";
import { FaDog } from "react-icons/fa";

const Widget = (props) => {
    return (
        <button style={{ display: "inline-flex", alignItems: "center" }} onClick={props.click}>
            <FaDog size={20} style={{ margin: "0px 10px" }}/>
            <h1>{props.text}</h1>
        </button>
    )
}

export default Widget;
