import React from "react";
import styled from "styled-components";
import { Col } from "reactstrap";
import PropTypes from "prop-types";

const Link = styled.a`
  color: var(--cp);
  &:hover {
    text-decoration: none;
    color: var(--c_sec);
  }
`;

const Icon = styled.span`
  margin: 0 0.5rem;
`;

const footerLink = props => {
  const { href, text, iconName, icon } = props;
  return (
    <Col data-test='footer_link'>
      <Link href={href}>
        {icon && (
          <Icon>
            <i className={iconName} />
          </Icon>
        )}
        {text}
      </Link>
    </Col>
  );
};

footerLink.defaultProps = {
  href: "/",
  text: "example",
  iconName: "fas fa-envelope",
  icon: false
};

footerLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  icon: PropTypes.bool
};

export default footerLink;
