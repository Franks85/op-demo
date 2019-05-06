import React, { Fragment } from "react";
import propTypes from "prop-types";

const checkboxes = ({ data }) => {
  const ceckList = data.map(c => (
    <div className="form-check form-check-inline" key={c.id}>
      <input
        className="form-check-input"
        type="checkbox"
        name="checkForm"
        id={c.id}
        value={c.value}
      />
      <label className="form-check-label" htmlFor={c.id}>
        {c.label}
      </label>
    </div>
  ));

  return <Fragment>{ceckList}</Fragment>;
};

checkboxes.defaultProps = {
  data: [
    {
      id: 1,
      label: "label",
      value: "value"
    }
  ]
};

checkboxes.propTypes = {
  data: propTypes.array.isRequired
};

export default checkboxes;
