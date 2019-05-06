import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 0.7rem;
`;

class Navigation extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { linkLeft, linkRight } = this.props;
    const navLeft = linkLeft.map(i => {
      return (
        <LinkContainer to={i.href} key={i.title}>
          <NavItem>
            <NavLink href={i.href}>{i.title}</NavLink>
          </NavItem>
        </LinkContainer>
      );
    });
    const navRight = linkRight.map(i => {
      return (
        <LinkContainer to={i.href} key={i.title}>
          <NavItem className="nav-link-right">
            <NavLink href={i.href}>{i.title}</NavLink>
          </NavItem>
        </LinkContainer>
      );
    });

    return (
      <Wrapper>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>{navLeft}</Nav>
          </Collapse>
          {navRight}
        </Navbar>
      </Wrapper>
    );
  }
}

Navigation.propTypes = {
  linkLeft: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string
    })
  ).isRequired,
  linkRight: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string
    })
  ).isRequired
};

export default Navigation;
