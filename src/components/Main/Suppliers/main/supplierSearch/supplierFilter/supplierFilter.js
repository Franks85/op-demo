import React from "react";
import CheckBox from "../../../../../../UI/form/checkboxes";
import SubmitButton from "../../../../../../UI/button/submitButton";
import { nationality, categoryType } from "./optionData";
import propTypes from "prop-types";

const supplierFilter = props => {
  const { submit } = props;
  return (
    <form onSubmit={submit}>
      <h2 className="text-primary">Filtro</h2>
      <h5>Nazionalità</h5>
      <div className="form-group">
        <CheckBox data={nationality} />
      </div>
      <h5>Tipo di categoria</h5>
      <div className="form-group">
        <CheckBox data={categoryType} />
      </div>
      <SubmitButton text="Trova" />
    </form>
  );
};

supplierFilter.propTypes = {
  submit: propTypes.func.isRequired
};

export default supplierFilter;
