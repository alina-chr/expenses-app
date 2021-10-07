import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpense = () => {
const {dispatch} = useContext(AppContext);

const [values, setValues]= useState('');
const [entry, setEntry] = useState('');
const onSubmit = (event) => {
event.preventDefault();
setValues(entry.split(':').map(item => item.trim()));
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
})
}; }


return (
    <form onSubmit={onSubmit}>
         <label htmlFor="entry">
          Add your expenses using the following pattern: Expense name : cost
        </label>
        <input type="text" name="entry" placeholder="Expense: 100" id="entry" value={entry} required onChange={(event) => setEntry(event.target.value)}></input>
        <button type="submit">ADD</button>
  </form>
);
};

export default AddExpense
