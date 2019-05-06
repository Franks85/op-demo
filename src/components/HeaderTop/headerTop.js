import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import OAlogo from "../../Util/img/openappalti-logo.png";
import PropTypes from "prop-types";

const style = {
  title: {
    fontSize: "1.3rem",
    textAlign: "right"
  },
  rightContent: {
    height: "100%"
  }
};

const Logo = styled.div`
    background: url('${props => props.bgUrl}') no-repeat left/contain;
    height: 6rem;
`;

const ImgRight = styled.div`
    background: url('${props => props.bgUrl}') no-repeat center/contain;
    height: 5rem;
`;

const headerTop = props => {
  const { rightContent, title, logoRight } = props;
  return (
    <Container fluid>
      <Row>
        <Col sm="4" lg="4">
          <a href="/">
            <Logo bgUrl={OAlogo} />
          </a>
        </Col>
        {rightContent && (
          <Col sm="8" lg={{ size: 4, offset: 4 }}>
            <Row
              className="d-flex align-items-center no-gutters justify-content-center"
              style={style.rightContent}
            >
              <Col xs="7" md="8">
                <h2 style={style.title}>
                  <a href="/senigallia" className="text-secondary">
                    {title}
                  </a>
                </h2>
              </Col>
              <Col xs="5" md="4">
                <ImgRight bgUrl={logoRight} />
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

headerTop.defaultProps = {
  rightContent: true,
  title: "Company Name",
  logoRight: "logo img"
};

headerTop.propTypes = {
  rightContent: PropTypes.bool,
  title: PropTypes.string,
  logoRight: PropTypes.string
};

export default headerTop;
