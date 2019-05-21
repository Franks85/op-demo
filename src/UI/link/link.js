import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Link = styled.a`
  color: ${props => props.color};
  &:hover {
    color: ${props => props.hoverColor};
  }
`;

const link = props => {
  const { children, href, color, hoverColor } = props;
  return (
    <Link href={href} color={color} hoverColor={hoverColor}>
      {children}
    </Link>
  );
};

link.defaultProps = {
  href: "/",
  color: "#3671c9",
  hoverColor: "#2298c6"
};

link.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  color: propTypes.string,
  hoverColor: propTypes.string
};

export default link;
