import React from "react";
import { Container } from "reactstrap";
import propTypes from "prop-types";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import {theme} from '../../../Util/ReactiveSearch/reactiveTheme'

const reactiveBase = props => {
  const { children } = props;
  return (
    <Container className='reactive' fluid>
      <ReactiveBase
        app="Fornitori"
        credentials="DtOupVr1V:2a3419f7-4147-495a-b5cf-726ec269856f"
        theme={theme}
      >
        {children}
      </ReactiveBase>
    </Container>
  );
};

reactiveBase.propTypes = {
  children: propTypes.node
};

export default reactiveBase;
