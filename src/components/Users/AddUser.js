import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";
const AddUser = (props) => {
    const[userfill,setUserFill]=useState("");
    const[ageFill,setAgeFill]=useState("");
    const[error,setError]=useState(null);
    
   const inputHandler=(event)=>{
      setUserFill(event.target.value);
   }
   const ageHandler=(event)=>{
      setAgeFill(event.target.value);
   }
   const errorHandler=()=>{
      setError(null);
   }
  const addUserHandler = (event) => {
    event.preventDefault();
    //when both conditions false or either false then return back to function
    if((userfill.trim().length===0) || (ageFill.trim().length===0)){
      setError({title:"Invalid Input",
        message:"Please enter a valid username and age (non-empty values)"})
      return;
    }
    if(+ageFill<1){
      setError({title:"Invalid Input",
        message:"Please enter a valid age (> 0)"})
      return;
    }
    props.onAddUser(userfill,ageFill);
    setUserFill("");
    setAgeFill("");
  };

  return (
    //Card has here one class name and in its component also it has class name so use this input classname in card component
<React.Fragment>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className="input">
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input  type="text" value={userfill} id="username" onChange={inputHandler}/>
      <label htmlFor="age">Age</label>
      <input type="number" value={ageFill} id="age" onChange={ageHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </React.Fragment>
  );
};

export default AddUser;