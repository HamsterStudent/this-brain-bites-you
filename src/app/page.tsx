"use client";
import NewBanner from "public/assets/temp/new.png";
import IconTooth from "public/assets/temp/icon_tooth.png";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useState } from "react";

const MainWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: start;
`;

const MainContentsWrap = styled.section`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    font-size: 72px;
    font-family: "din-condensed";
    text-align: center;
    word-break: keep-all;
  }
`;

const marquee = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100%)
  }
`;
const swap = keyframes`
  0%, 50% {
    left: 0%;
  }
  50.01%,
  100% {
    left: 100%;
  }
`;

const MainBanner = styled.div`
  position: relative;
`;

const Item = styled.div`
  position: absolute;
  &:hover {
    /* transform: scale(1.03); */
    transition: transform 0.2s ease-in-out;
  }
  &:not(:hover) {
    /* transform: scale(1); */
    transition: transform 0.2s ease-in-out;
  }
  &.blank {
    top: 35.7%;
    left: 22.7%;
    width: 14%;
  }
  &.guest {
    top: 49.3%;
    left: 5.9%;
    width: 14.5%;
  }
  &.achive {
    top: 54.1%;
    left: 31.4%;
    width: 20%;
  }
  &.shop {
    top: 47.9%;
    left: 16%;
    width: 19.9%;
  }
  &.works {
    top: 40.8%;
    left: 37.4%;
    width: 17.9%;
  }
  &.events {
    top: 32%;
    right: 13.8%;
    width: 17.9%;
  }
  &.biographyPortfolio {
    top: 34%;
    right: 33%;
    width: 13%;
  }
  &.contact {
    top: 45.8%;
    right: 27.1%;
    width: 18.5%;
  }
  &.workss {
    top: 58%;
    right: 20.8%;
    width: 15.8%;
  }
  &.drawingbox {
    top: 68%;
    right: 31.8%;
    width: 14.5%;
  }
`;

const Banner = styled.div`
  width: 50%;
  min-height: 80px;
  max-height: 100px;
  display: flex;
  align-items: center;
`;

const Prompt = styled(Banner)`
  border-left: dashed 2px #61ff5e;
  border-right: dashed 2px #61ff5e;
  padding: 20px;
  .icon {
    width: 40px;
  }
  .prompt {
    width: 380px;
    min-width: 100%;
    overflow: hidden;
    height: 50px;
    margin: 0 auto;
    white-space: nowrap;
    min-width: 0;
    display: flex;
    align-items: center;
    .ticker {
      display: inline-block;
      animation: ${marquee} 20s linear infinite;
    }
    .item-collection-1 {
      position: relative;
      left: 0%;
      animation: ${swap} 20s linear infinite;
    }
    .item {
      display: inline-block;
      /* color: #fff; */
      margin-left: 15px;
    }
  }
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

export default function Home() {
  const [countIndex, setCountIndex] = useState(-1);

  const itemList = [
    "blank",
    "guest",
    "shop",
    "works",
    "achive",
    "biographyPortfolio",
    "events",
    "contact",
    "workss",
    "drawingbox",
  ];

  return (
    <MainWrap>
      <MainContentsWrap>
        <h1>김하연 KIMHAYEON 金河緣</h1>
        <MainBanner>
          <ImageWrap>
            <Image
              src="/assets/main/background/main_back.png"
              width={1000}
              height={1000}
              alt="MainBanner"
            />
          </ImageWrap>
          {itemList.map((x, idx) => {
            return (
              <Item
                key={idx}
                className={`${x} ${countIndex === idx && "active"}`}
                onMouseEnter={() => {
                  setCountIndex(idx);
                }}
                onMouseLeave={() => {
                  setCountIndex(-1);
                }}
              >
                <Link href={`/`}>
                  <Image
                    src={`/assets/main/icon/${
                      countIndex === idx ? `after` : `before`
                    }/${x}.png`}
                    width={351}
                    height={365}
                    layout="responsive"
                    alt={x}
                  />
                </Link>
              </Item>
            );
          })}
        </MainBanner>

        <Banner>
          <ImageWrap>
            <Image
              src="/assets/main/new.png"
              width={1000}
              height={1000}
              alt="NewBanner"
            />
          </ImageWrap>
        </Banner>

        <Prompt>
          <div className="icon">
            <ImageWrap>
              <Image src={IconTooth} alt="IconTooth" />
            </ImageWrap>
          </div>
          <div className="prompt">
            <div className="ticker">
              <span className="item-collection-1">
                <span className="item">
                  <Link href={"/"}>
                    {"[ "}HAMSTER PARTY{" ]"} : 불온한 사상을 가진 정당
                  </Link>
                </span>
                <span className="item">
                  <Link href={"/"}>
                    {"[ "}GOOD IS GOOD{" ]"} : 당연한 것에 대해서
                  </Link>
                </span>
                <span className="item">
                  <Link href={"/"}>
                    {"[ "}WHAT IS RAT?{" ]"} : 옳은 것인가에 대한 질문
                  </Link>
                </span>
              </span>
              <span className="item-collection-2">
                <span className="item">
                  <Link href={"/"}>
                    {"[ "}HAMSTER PARTY{" ]"} : 불온한 사상을 가진 정당
                  </Link>
                </span>
                <span className="item">
                  <Link href={"/"}>
                    {"[ "}GOOD IS GOOD{" ]"} : 당연한 것에 대해서
                  </Link>
                </span>
                <span className="item">
                  <Link href={"/"}>
                    {"[ "}WHAT IS RAT?{" ]"} : 옳은 것인가에 대한 질문
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </Prompt>
      </MainContentsWrap>
    </MainWrap>
  );
}
