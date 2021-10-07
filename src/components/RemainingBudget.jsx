import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
  const {budget, expenses} = useContext(AppContext);

  const totalExpenses= expenses.reduce((total, item)=>{
    return total = total + item.cost;
  }, 0);

  return (
    <div>
      <span>Remaining Budget: {budget - totalExpenses}$</span>

    </div>
  )
}

export default RemainingBudget;
