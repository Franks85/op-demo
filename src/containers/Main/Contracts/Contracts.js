import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import ReactiveBase from "../../../components/Main/Contracts/reactiveBase";
import DataSearch from "../../../components/Main/Contracts/dataSearch";
import Results from "../../../components/Main/Contracts/results";
import TagCloud from "../../../components/Main/Contracts/tagCloud";
import ScrollUpButton from "react-scroll-up-button";

const style = {
  margin: "40px 0",
}

class Contracts extends Component {
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
        <ScrollUpButton />
      </Container>
    );
  }
}

export default Contracts;