import React from "react";
import styled from "styled-components";
import { media } from "../../../../Util/StyledComponent/mediaQueryHelper";

const Wrapper = styled.div`
  display: flex;
  min-height: 20rem;
  width: 60%;
  margin: 5rem auto;
  align-items: center;
  overflow: hidden;
  ${media.lessThan("desktop")`
      width: 90%;
    `};
  ${media.lessThan("phone")`
      flex-direction: column-reverse;
      margin: 2rem auto;
    `};
`;

const Info = styled.div`
  flex: 1;
  border-right: 1px solid #ccc;
  text-align: right;
  padding: 0 2.5rem;
  ${media.lessThan("tablet")`
      padding: 1rem;
    `};
  ${media.lessThan("phone")`
    border-right: 0;
    border-top: 1px solid #ccc;
    text-align: center;
    `};
`;

const Logo = styled.div`
  flex: 1;
  padding: 0 2.5rem;
  ${media.lessThan("tablet")`
      padding: 1rem;
    `};
`;
const layout = props => {
  const { info, logo } = props;
  return (
    <Wrapper>
      <Info>{info}</Info>
      <Logo>{logo}</Logo>
    </Wrapper>
  );
};

export default layout;
