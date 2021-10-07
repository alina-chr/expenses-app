import React, {useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <li key={props.id}>
      {props.name}
    <div><span>{props.cost}</span>
    <TiDelete size='1.5em' onClick={handleDeleteExpense}>x</TiDelete>
    </div>
    </li>
  );
};

export default ExpenseItem;
