import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import propTypes from "prop-types";

const style = {
  label: {
    margin: ".5rem 1.5rem .5rem 0",
    fontSize: '1.6rem'
  },
  input: {
    color: "#838383",
    textTransform: "capitalize",
    fontSize: "1.3rem",
    letterSpacing: ".1rem"
  },
  button: {
    marginTop: '.7rem'
  }
};

const searchBar = props => {
  const { label, placeholder, bText } = props;
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSearch" style={style.label}>
          {label}
        </Label>
      </FormGroup>
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder={placeholder}
          style={style.input}
        />
        <Button color="primary" style={style.button}>{bText}</Button>
      </FormGroup>
    </Form>
  );
};

searchBar.defaultProps = {
  label: "Search",
  placeholder: "...",
  bText: "Find"
};

searchBar.propTypes = {
  label: propTypes.string.isRequired,
  placeholder: propTypes.string,
  bText: propTypes.string.isRequired
};

export default searchBar;
