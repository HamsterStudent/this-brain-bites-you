import React, { useState } from "react";
import NavImg from "public/assets/temp/nev.png";
import NavOpenImg from "public/assets/temp/nev_open.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const Nav = styled.section`
  width: 10%;
  min-width: 80px;
`;
const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const NavListWrap = styled.div`
  background: url("/assets/temp/nav_bg.png") no-repeat;
  background-size: contain;
  text-align: center;
  padding-bottom: 80px;
  .mainCategory {
    li {
      margin-bottom: 15px;
      font-weight: 500;
    }
  }
  .subCategory {
    li {
      margin-bottom: 10px;
    }
  }
`;
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      {!isOpen ? (
        <ImageWrap
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <Image src={NavImg} alt="nav" />
        </ImageWrap>
      ) : (
        <>
          <ImageWrap
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <Image src={NavOpenImg} alt="nav" />
          </ImageWrap>
          <NavListWrap>
            <ul className="mainCategory">
              <li>
                <Link href={"/work"}>WORK</Link>
              </li>
              <li>
                <Link href={"/"}>EVENT</Link>
              </li>
              <li>
                <Link href={"/"}>GUEST</Link>
              </li>
              <li>
                <Link href={"/"}>SHOP</Link>
              </li>
              <li>
                <Link href={"/"}>CONTACT</Link>
              </li>
            </ul>
            <ul className="subCategory">
              <li>
                <Link href={"/"}>Instagram</Link>
              </li>
              <li>
                <Link href={"/"}>Facebook</Link>
              </li>
              <li>
                <Link href={"/"}>Twitter</Link>
              </li>
              <li>
                <Link href={"/"}>Youtube</Link>
              </li>
            </ul>
          </NavListWrap>
        </>
      )}
    </Nav>
  );
}
