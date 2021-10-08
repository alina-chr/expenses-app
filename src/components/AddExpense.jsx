import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);

  const [entry, setEntry] = useState("");
  const changeHandler = (event) => {
    setEntry(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const values = entry.split(":").map((item) => item.trim());
    const cost = parseInt(values[1]);
    if (values) {
      const expense = {
        id: uuidv4(),
        name: values[0],
        cost: cost,
      };

      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });

      setEntry("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label
        htmlFor="entry"
        css={css`
          color: #740785;
        `}
      >
        Add your expenses using the following pattern: Expense name : cost
      </label>
      <input
        type="text"
        name="entry"
        placeholder="Expense: 100"
        id="entry"
        value={entry}
        required
        onChange={changeHandler}
        css={css`
          width: 30%;
          padding: 10px 20px;
          border-width: 1px;
          background: rgba(255, 255, 255, 0.3);
          margin: 10px 5px;
          box-sizing: border-box;
        `}
      ></input>
      <button
        type="submit"
        css={css`
          background-color: transparent;
          border: 1 px solid white;
          padding: 10px 15px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 15px;
          outline: none;
          background: rgba(142, 172, 237, 0.3);
          border-width: 1px;
        `}
      >
        ADD
      </button>
    </form>
  );
};

export default AddExpense;
