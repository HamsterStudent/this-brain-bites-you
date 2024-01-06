import React from "react";
import styled from "styled-components";

const FooterWrap = styled.section`
  width: 100%;
  font-family: "copperplate", sans-serif;
  font-weight: 700;
  color: grey;
  font-size: 24px;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <div>
        <p>COPYRIGHT ©THIS BRAIN BITES YOU</p>
        <p>HAYEON KIM ALL RIGHTS RESERVED</p>
        <p>UPDATED</p>
      </div>
    </FooterWrap>
  );
}
