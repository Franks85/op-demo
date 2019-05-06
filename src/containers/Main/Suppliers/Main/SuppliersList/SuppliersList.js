import React, { Component } from "react";
import SupplierDetail from "../../../../../components/Main/Suppliers/main/supplierDetail/supplierDetail";
import propTypes from 'prop-types'

class SuppliersList extends Component {
  render() {
    const {data} = this.props;
    const suppliers = data.map(s => (
      <SupplierDetail
        name={s.name}
        nameHref={s.nameHref}
        pIva={s.pIva}
        stazApp={s.stazApp}
        stazAppHref={s.stazAppHref}
        protocol={s.protocol}
        protocolDate={s.protocolDate}
        category={s.category}
        key={s.id}
      />
    ));
    return <>{suppliers}</>;
  }
}

SuppliersList.propTypes = {
  data: propTypes.array.isRequired
}

export default SuppliersList;
