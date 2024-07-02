import React from "react";
import "./Card.css";
const Card=(props)=>{
    //provide space in "card " so it display correct output
    const classes="card "+props.className;
    return(
    <div className={classes}>
      {props.children}
    </div>
    );
}
export default Card;