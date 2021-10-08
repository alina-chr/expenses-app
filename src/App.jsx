import "./App.css";
import React from "react";
import RemainingBudget from "./components/RemainingBudget";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext.jsx";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

function App() {
  return (
    <AppProvider>
      <div
        className="App"
        css={css`
          margin: 0 auto;
          width: 70%;
          text-align: center;
        `}
      >
        <h1
          css={css`
            color: #2b165e;
          `}
        >
          Track Your Expenses
        </h1>
        <div>
          <RemainingBudget />
        </div>
        <div>
          <h2
            css={css`
              color: #2b165e;
            `}
          >
            Add Expenses
          </h2>
          <AddExpense />
        </div>
        <div>
          <h2
            css={css`
              color: #063291;
            `}
          >
            Expense List
          </h2>
          <ExpenseList />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
