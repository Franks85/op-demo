import React, { Fragment } from "react";
import Layout from "./Layout/layout";
import { info, logo } from "./companyInfoConfig";
import styled from "styled-components";
import Link from '../../../UI/link/link'

const LogoBox = styled.div`
  background: url('${props => props.bgUrl}') no-repeat left/contain;
  height: 10rem;
  width: 10rem;
`;

const companyInfo = () => {
  const infoBox = (
    <Fragment>
      <h2>{info.title}</h2>
      <p>{info.address}</p>
      <p>{info.city}</p>
      <br />
      <p><span>Tel:</span>{info.tel}</p>
      <p><span>Partita IVA:</span>{info.pIva}</p>
      <span>
        Pec:
        <Link href={info.pecHref}> {info.pec}</Link>
      </span>
    </Fragment>
  );
  const logoImg = <LogoBox bgUrl={logo} />;
  return <Layout info={infoBox} logo={logoImg} />;
};

export default companyInfo;
