import React from "react";

const Button (props) => {
    const { color, label, onclick} = props;
    return ( <button style={{
        color: color
    }}>
    </button>);
}