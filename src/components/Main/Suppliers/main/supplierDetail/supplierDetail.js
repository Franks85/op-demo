import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";
import Link from "../../../../../UI/link/link";

const Wrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem 0;
`;

const Field = styled.p`
  span {
    font-weight: bold;
    margin-right: 0.5rem;
    text-transform: uppercase;
  }
`;

const supplierDetail = props => {
  const {
    name,
    nameHref,
    pIva,
    stazApp,
    stazAppHref,
    protocol,
    protocolDate,
    category
  } = props;
  return (
    <Wrapper>
      <Row>
        <Col>
          <Field><Link href={nameHref}>{name}</Link></Field>
          <Field>
            <span>P.IVA:</span>
            {pIva}
          </Field>
          <Field>
            <span>Stazione Appaltante:</span>
            <Link href={stazAppHref}>{stazApp}</Link>
          </Field>
          <Field>
            <span>Identificativo Protocollo:</span>
            {protocol}
          </Field>
          <Field>
            <span>Data Protocollo:</span>
            {protocolDate}
          </Field>
          <Field>
            <span>Categorie:</span>
            {category}
          </Field>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default supplierDetail;
