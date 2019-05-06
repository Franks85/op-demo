import React from "react";
import NumberFormat from "react-number-format";

export const percentFormat = (cell, row) => <span>{cell}%</span>;

export const euroFormat = (cell, row) => (
  <span>
    <NumberFormat value={cell} displayType={"text"} thousandSeparator={true} suffix='€' />
  </span>
);


