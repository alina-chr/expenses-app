import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const RemainingBudget = () => {
  const { budget, expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div>
      <span
        css={css`
          border: 1px solid #2b165e;
          padding: 5px;
          border-radius: 5px;
        `}
      >
        Remaining Budget:
        {budget - totalExpenses}$
      </span>
    </div>
  );
};

export default RemainingBudget;
