import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import propTypes from "prop-types";

const Link = styled.a`
  letter-spacing: 0.1rem;
  padding: 0.5rem;
`;

const linkButton = props => {
  const { text, href } = props;
  return (
    <Row>
      <Col className="text-center pt-3">
        <Link className="btn btn-info" href={href} role="button">
          {text}
        </Link>
      </Col>
    </Row>
  );
};

linkButton.defaultProps = {
  text: "button",
  href: "/"
};

linkButton.propTypes = {
  text: propTypes.string.isRequired,
  href: propTypes.string.isRequired
};

export default linkButton;
