import React from "react";
import propTypes from "prop-types";

const submitButton = props => {
  const { text } = props;
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
};

submitButton.defaultProps = {
  text: "Submit"
};

submitButton.propTypes = {
  text: propTypes.string.isRequired
};

export default submitButton;
