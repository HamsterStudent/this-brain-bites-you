import React, { useState } from "react";
import NavImg from "public/assets/nav/compare_before.png";
import NavOpenImg from "public/assets/nav/compare.png";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const Nav = styled.section`
  position: fixed;
  top: 30px;
  right: 15%;
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

const NavOpen = styled.div``;

const NavListWrap = styled.div`
  background-size: contain;
  text-align: center;
  /* padding-bottom: 80px; */
  position: absolute;
  top: 39%;

  width: 100%;
  .mainCategory {
    li {
      margin-bottom: 13%;
      font-weight: 500;
      display: flex;
      justify-content: center;
    }
    padding-bottom: 30%;
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
        <NavOpen>
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
                <Link href={"/work"}>
                  <ImageWrap>
                    <img src={"/assets/nav/works.png"} alt="works" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/events.png"} alt="events" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/guest.png"} alt="guest" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/shop.png"} alt="shop" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/contact.png"} alt="contact" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/portfolio.png"} alt="portfolio" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/biography.png"} alt="biography" />
                  </ImageWrap>
                </Link>
              </li>
            </ul>
            <ul className="subCategory">
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/achive.png"} alt="achive" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img src={"/assets/nav/workss.png"} alt="workss" />
                  </ImageWrap>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <ImageWrap>
                    <img
                      src={"/assets/nav/drawing_box.png"}
                      alt="drawing_box"
                    />
                  </ImageWrap>
                </Link>
              </li>
            </ul>
          </NavListWrap>
        </NavOpen>
      )}
    </Nav>
  );
}
