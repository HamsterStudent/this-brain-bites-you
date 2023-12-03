"use client";
import MainBanner from "public/assets/temp/main_banner.png";
import NewBanner from "public/assets/temp/new.png";
import IconTooth from "public/assets/temp/icon_tooth.png";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Navigation from "./_components/navigation";

const MainWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: start;
`;

const MainContentsWrap = styled.section`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
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

const MainBenner = styled.div`
  width: 50%;
  min-height: 100px;
  max-height: 150px;
  display: flex;
  align-items: center;
  .icon {
    width: 50px;
  }
  .prompt {
    width: 300px;
    min-width: 100%;
    overflow: hidden;
    height: 50px;
    margin: 0 auto;
    white-space: nowrap;
    min-width: 0;
    border: dotted 1px #61ff5e;
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
  return (
    <MainWrap>
      <MainContentsWrap>
        <ImageWrap>
          <Image src={MainBanner} alt="MainBanner" />
        </ImageWrap>
        <MainBenner>
          <ImageWrap>
            <Image src={NewBanner} alt="NewBanner" />
          </ImageWrap>
        </MainBenner>

        <MainBenner>
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
        </MainBenner>
      </MainContentsWrap>

      <Navigation />
    </MainWrap>
  );
}
