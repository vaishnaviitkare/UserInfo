import React from "react";
const AddUser=()=>{
    const addUserHandler=(event)=>{
      event.preventDefault();
    }
    return(
       <div>
        <form onSubmit={addUserHandler}>
            <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            </div>
            <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number"/>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
       </div>
    );
}
export default AddUser;