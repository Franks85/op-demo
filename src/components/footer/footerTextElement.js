import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import PropTypes from "prop-types";

const Text = styled.p``;

const Icon = styled.span`
  margin: 0 0.5rem;
`;

const footerTextElement = props => {
  const { iconName, text } = props;
  return (
    <Col>
      <Text>
        <Icon>
          <i className={iconName} />
        </Icon>
        {text}
      </Text>
    </Col>
  );
};

footerTextElement.defaultProps = {
  text: "example",
  iconName: "fas fa-envelope",
};

footerTextElement.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string
};

export default footerTextElement;
