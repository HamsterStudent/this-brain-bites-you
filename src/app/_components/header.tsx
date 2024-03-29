import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "public/assets/temp/logo.png";
import Link from "next/link";

const HeaderWrap = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgWrap {
    width: 190px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }
`;

const ImageWrap = styled.div`
  width: 190px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export default function Header() {
  return (
    <HeaderWrap>
      <div className="imgWrap">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
    </HeaderWrap>
  );
}
