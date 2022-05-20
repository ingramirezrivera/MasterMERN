import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contact } from "./Contact";

export const Person = () => {
  let { name = "NameDefault", lastName = "LastNameDefault" } = useParams();
  const navigate = useNavigate();

  const send = (e) => {
    e.preventDefault();
    console.log(e.target)
    const target = e.target;
    const name = target.name.value;
    const lastName = target.lastName.value;
    let url = `/Person/${name}/${lastName}`;

    if(name.length <= 0 && lastName.length <= 0){
        navigate("/Home");
    }else if(name === "Contact"){
        navigate("/Contact")
    }
    
  };

  return (
    <div>
      <h1>Person Page</h1>
      <p>This is teh person page</p>

      <h2>This is the url prameter name: {name}</h2>
      <h2>This is the url prameter lastName: {lastName}</h2>

      <form onSubmit={send}>
        <input type="text" name="name" />
        <input type="text" name="lastName" />
        <input type="submit" name="send" value="Send" />
      </form>
    </div>
  );
};
