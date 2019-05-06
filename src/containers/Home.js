import React, { Component, Fragment } from "react";
import styled from "styled-components";
import CompanyInfo from "../components/Main/Home/companyInfo";

const MainContent = styled.div``;
class Home extends Component {
  render() {
    return (
      <Fragment>
        <MainContent>
          <CompanyInfo />
        </MainContent>
      </Fragment>
    );
  }
}

export default Home;
