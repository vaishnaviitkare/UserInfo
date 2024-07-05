import React from "react";
import "./Button.css";
const Button=(props)=>{
return(
<div>
    {/*here we give "button" as or type if type is not mentioned then default type is button*/}
    <button type={props.type || "button"}  className="button" onClick={props.onClick}>{props.children}</button>
</div>
);
}
export default Button;