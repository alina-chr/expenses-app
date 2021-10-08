import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li
      key={props.id}
      css={css`
        list-style: none;
        display: flex;
        justify-content: center;
      `}
    >
      {props.name}
      <span
        css={css`
          margin: 0 5px;
          color: #2b165e;
          font-weight: bold;
        `}
      >
        {props.cost} $
      </span>
      <TiDelete size="1.5em" onClick={handleDeleteExpense}>
        x
      </TiDelete>
    </li>
  );
};

export default ExpenseItem;
