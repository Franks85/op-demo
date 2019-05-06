import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../../../components/Main/Suppliers/Layout/layout";
import Main from './Main/SuppliersSearch/SuppliersSearch'
import Aside from './Aside/Aside'

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

class Suppliers extends Component {
  render() {
    
    return (
      <Wrapper>
        <Layout main={<Main />} aside={<Aside />}/>
      </Wrapper>
    );
  }
}

export default Suppliers;
