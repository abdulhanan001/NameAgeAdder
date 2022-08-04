import React from "react";
import Card from '../Card'
import classes from './AddUser.module.css'
import Button from "../Button";
import { useState } from "react";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')


  const addUserHandler = (event) => {
      event.preventDefault();
      console.log(enteredUserName, enteredAge)
  }
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

return (
  <Card  className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id= 'username' type='text' onChange={usernameChangeHandler}/>
      <label htmlFor="age">Age</label>
      <input id= 'age' type='text'  onChange={ageChangeHandler}/>
      <Button type="submit">Add</Button>
    </form>
  </Card>
)
}

export default AddUser;
