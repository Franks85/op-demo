import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import propTypes from "prop-types";

const table = props => {
  const { data, columns } = props;
  return <BootstrapTable keyField="id" data={data} columns={columns} striped />;
};

table.propTypes = {
  data: propTypes.array.isRequired,
  columns: propTypes.array.isRequired
};

export default table;
