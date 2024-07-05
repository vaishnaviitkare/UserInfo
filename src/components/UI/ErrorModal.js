import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";
const Backdrop=(props)=>{
  return <div className="backdrop" onClick={props.onConfirm}></div>
    }

const OverlayModal=(props)=>{
      return (
        <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
      );
  
    }
const ErrorModal=(props)=>{
  
   return (
    <React.Fragment>
    {
      ReactDOM.createPortal(<Backdrop onClick={props.onConfirm}/>,document.getElementById("backdrop-root"))
    }
    {
      ReactDOM.createPortal(<OverlayModal title={props.title} message={props.message} onClick={props.onConfirm}/>,document.getElementById("overlay-modal"))
    }
    </React.Fragment>
   )
}
export default ErrorModal;