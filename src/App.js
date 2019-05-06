import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Header from "./containers/Header/Header";
import Footer from "./components/footer/footer";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Router>
          <div>
            <Header />
            <BaseRouter />
            <Footer />
          </div>
        </Router>
      </Wrapper>
    );
  }
}

export default App;
