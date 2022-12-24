import React, {useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
      setError(
        {
          title: 'Empty Fields',
          message: 'Please add username and age.'
        }
      )
      return;
    }
    if (+enteredUserAge < 1){
      setError(
        {
          title: 'Non Negtive Age Value',
          message: 'Please add age > 0.'
        }
      )
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  const onErrorHandler = () => {
    setError(null);
  }
  return(
    <>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={onErrorHandler} /> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input id="username" type="text" ref={nameInputRef}/>
          <label htmlFor="age"> Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
};

export default AddUser;
