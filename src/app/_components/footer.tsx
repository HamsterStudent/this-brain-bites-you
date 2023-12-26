import React from "react";
import styled from "styled-components";

const FooterWrap = styled.section`
  @font-face {
    font-family: "Copperplate";
    src: url("https://fonts.cdnfonts.com/css/copperplate");
    font-weight: normal;
    font-style: normal;
  }
  width: 100%;
  font-family: "Copperplate", sans-serif;
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
