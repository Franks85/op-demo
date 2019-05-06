import React from "react";
import propTypes from "prop-types";
import { Alert } from "reactstrap";

const alert = props => {
  const { text, type } = props;
  return <Alert color={type}>{text}</Alert>;
};

alert.defaultProps = {
  text: "message",
  type: "success"
};

alert.propTypes = {
  text: propTypes.string,
  type: propTypes.string
};

export default alert;
