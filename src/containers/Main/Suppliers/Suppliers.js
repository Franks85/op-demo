import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import ReactiveBase from "../../../components/Main/Suppliers/reactiveBase";
import DataSearch from "../../../components/Main/Suppliers/dataSearch";
import Results from "../../../components/Main/Suppliers/results";
import TagCloud from "../../../components/Main/Suppliers/tagCloud";
import './suppliers.css'

const style = {
  margin: "40px 0",
}

class Suppliers extends Component {
  render() {
    return (
      <Container style={style} fluid>
        <ReactiveBase>
          <Row>
            <DataSearch />
            <Results />
            <TagCloud />
          </Row>
        </ReactiveBase>
      </Container>
    );
  }
}

export default Suppliers;
