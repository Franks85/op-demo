import React from "react";
import { Row, Container } from "reactstrap";
import InfoText from "./footerTextElement";
import InfoLink from "./footerLink";
import styled from "styled-components";

const Footer = styled.footer``;

const footer = () => {
  return (
    <Footer>
      <Container fluid className="mt-5 pb-3 pt-3 bg-light">
        <small>
          <Row className="text-center">
            <InfoLink
              href="http://www.informaetica.it"
              target="_blank"
              text="Informaetica"
            />
            <InfoText
              iconName="far fa-hand-point-left"
              text="ramo IT Consorzio Solidarietà soc. coop."
            />
            <InfoText
              iconName="fas fa-briefcase"
              text="C.F. e P.IVA: 01370630426"
            />
            <InfoText iconName="fas fa-phone" text="071/793.82.39" />
            <InfoText iconName="fas fa-print" text="071/793.82.43" />
            <InfoLink
              href="mailto:info@openappalti.it"
              text="info@openappalti.it"
              icon
              iconName="fas fa-envelope"
            />
            <InfoLink
              href="/privacy"
              text="Privacy"
              icon
              iconName="fas fa-envelope"
            />
          </Row>
        </small>
      </Container>
    </Footer>
  );
};

export default footer;
