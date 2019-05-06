import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "reactstrap";
import _ from "lodash";
import styled from "styled-components";
import SortDropdown from "../../../../../components/Main/Suppliers/main/supplierSearch/supplierSort/sort";
import SuppliersList from "../SuppliersList/SuppliersList";
import SupplierFilter from "../../../../../components/Main/Suppliers/main/supplierSearch/supplierFilter/supplierFilter";
import Alert from "../../../../../UI/alert/alert";
import { StageSpinner } from "react-spinners-kit";
import { loadSupplier } from "../../../../../store/actions/supplier";
import { selectAllSuppliers } from "../../../../../store/selectors/supplier";

const Main = styled.div`
  padding: 2rem 0;
`;

class Search extends Component {
  state = {
    orderBy: "name",
    order: "asc"
  };

  componentDidMount() {
    this.props.loadSupplier();
  }

  doOrderBy = e => {
    e.preventDefault();
    const newOrderBy = e.target.getAttribute("data-value");
    this.setState({ orderBy: newOrderBy });
  };

  doOrder = e => {
    e.preventDefault();
    const newOrder = e.target.getAttribute("data-value");
    this.setState({ order: newOrder });
  };

  onFilter = e => {
    e.preventDefault();
    console.log(e.target[0].value);
    // da completare
  };

  render() {
    const { orderBy, order } = this.state;
    const { items, loading, error } = this.props;
    console.log(items);

    let sorted = items;
    sorted = _.orderBy(
      sorted,
      item => {
        return item[orderBy];
      },
      order
    );

    const list = <SuppliersList data={sorted} />;
    const spinner = (
      <StageSpinner size={40} color="#2dbfbe" loading={loading} />
    );
    const errMsg = <Alert type="danger" text={error} />;
    return (
      <Container>
        <Row className="p-3">
          <Col lg={4} sm={6} className="mt-2">
            <SupplierFilter submit={this.onFilter} />
          </Col>
          <Col lg={{ size: 4, offset: 1 }} sm={6} className="mt-2">
            <SortDropdown
              doOrderBy={this.doOrderBy}
              doOrder={this.doOrder}
              orderBy={orderBy}
              order={order}
            />
          </Col>
        </Row>
        <Main>
          {error ? errMsg : null}
          {loading && spinner}
          {list}
        </Main>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { supplier: {loading, error} } = state;
  return {
    items: selectAllSuppliers(state),
    loading,
    error
  };
};

export default connect(
  mapStateToProps,
  { loadSupplier }
)(Search);
