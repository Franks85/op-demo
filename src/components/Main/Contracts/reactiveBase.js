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
        app="contratti"
        credentials="efpJZSqdE:51418dd4-eae5-4a10-8955-901d432a58f6"
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