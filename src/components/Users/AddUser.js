import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
const AddUser = () => {
    const[userfill,setUserFill]=useState("");
    const[ageFill,setAgeFill]=useState("");
   const inputHandler=(event)=>{
      setUserFill(event.target.value);
   }
   const ageHandler=(event)=>{
      setAgeFill(event.target.value);
   }
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(userfill);
    console.log(ageFill);
    setUserFill("");
    setAgeFill("");
  };

  return (
    //Card has here one class name and in its component also it has class name so use this input classname in card component
    <Card className="input">
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input  type="text" value={userfill} id="username" onChange={inputHandler}/>
      <label htmlFor="age">Age</label>
      <input type="number" value={ageFill} id="age" onChange={ageHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;