import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpense = () => {
const {dispatch} = useContext(AppContext);


const [entry, setEntry] = useState('');
const changeHandler = (event) => {
setEntry(event.target.value)
}

const submitHandler = (event) => {
event.preventDefault();
const values = entry.split(':').map(item => item.trim())
const cost = parseInt(values[1])
if (values)
{ const expense = {
  id: uuidv4(),
  name: values[0],
  cost: cost,
};

dispatch({
  type:'ADD_EXPENSE',
  payload: expense,
});

setEntry('')
}; }


return (
    <form onSubmit={submitHandler}>
         <label htmlFor="entry">
          Add your expenses using the following pattern: Expense name : cost
        </label>
        <input type="text" name="entry" placeholder="Expense: 100" id="entry" value={entry} required onChange={changeHandler}></input>
        <button type="submit">ADD</button>
  </form>
);
};

export default AddExpense
