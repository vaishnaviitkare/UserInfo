import React from "react";
import Card from "../UI/Card";
import "./UserList.css";
const UserList=(props)=>{
return(
<Card className="users">
<ul>
 {
    props.users.map((userList)=>{
       return (
        <li key={userList.id}>
           {userList.name} ({userList.age} years old) 
        </li>
       );
    })
 }
</ul>
</Card>
)
}
export default UserList;