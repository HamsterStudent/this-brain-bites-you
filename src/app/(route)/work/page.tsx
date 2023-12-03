"use client";
import React from "react";
import styled from "styled-components";
import Disorder from "public/assets/temp/disorder.png";
import Orderliness from "public/assets/temp/orderliness.png";
import Brain from "public/assets/temp/icon_brain.png";
import Image from "next/image";
import Navigation from "@/app/_components/navigation";

const WorkWrap = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: start;
`;

const WorkContents = styled.section`
  width: 100%;
  padding: 10px;
`;

const Sidebar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .sideorder {
    display: flex;
    :nth-child(2) {
      width: 200px;
    }
  }
  margin-bottom: 10px;
`;

const PlayGround = styled.div`
  width: 100%;
  height: 50vh;
  border: dotted 1px;
`;

const ImageWrap = styled.div`
  width: 90px;
  height: 90px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export default function Work() {
  return (
    <WorkWrap>
      <WorkContents>
        <Sidebar>
          <div className="sideorder">
            <ImageWrap>
              <Image src={Disorder} alt="Disorder" />
            </ImageWrap>
            <ImageWrap>
              <Image src={Brain} alt="Brain" />
            </ImageWrap>
            <ImageWrap>
              <Image src={Orderliness} alt="Orderliness" />
            </ImageWrap>
          </div>
        </Sidebar>
        <PlayGround></PlayGround>
      </WorkContents>

      <Navigation />
    </WorkWrap>
  );
}
