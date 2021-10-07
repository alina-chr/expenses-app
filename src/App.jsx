import './App.css';
import React from 'react';
import RemainingBudget from './components/RemainingBudget';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext.jsx';

function App() {
  return (
    <AppProvider>
      <div className="App">
      <h1>Track Your Expenses</h1>
      <div>
        <RemainingBudget></RemainingBudget>
      </div>
      <div>
        <h2>Add Expenses</h2>
        <AddExpense></AddExpense>
      </div>
      <div>
        <h2>Expense List</h2>
        <ExpenseList></ExpenseList>
      </div>
    </div>
    </AppProvider>

  );
}

export default App;
