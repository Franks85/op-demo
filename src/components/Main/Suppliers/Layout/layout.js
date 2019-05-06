import React from "react";
import { Row, Col, Container } from "reactstrap";
import styled from "styled-components";
import { media } from "../../../../Util/StyledComponent/mediaQueryHelper";
import propTypes from "prop-types";

const Main = styled.div`
  h5 {
    letter-spacing: 0.15rem;
  }
`;

const Aside = styled.div`
  ${media.lessThan("desktop")`
      display: none;
    `};
`;

const layout = props => {
  const { main, aside } = props;
  return (
    <Container fluid>
      <Row>
        <Col lg={9}>
          <Main>
            <h5 className="text-secondary">
              <span>Fornitori trovati:</span> 1436
            </h5>
            {main}
          </Main>
        </Col>
        <Col lg={3}>
          <Aside>{aside}</Aside>
        </Col>
      </Row>
    </Container>
  );
};

layout.propTypes = {
  main: propTypes.node,
  aside: propTypes.node
};

export default layout;
