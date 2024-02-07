import React, { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Item from "./item";
import Image from "next/image";

const PlayGroundWrap = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  border: dotted 1px;
  overflow: hidden;
`;

const prodList = [
  {
    name: "hamster",
    img: "/assets/prod/1.png",
    defaultPosition: { x: 0, y: 0 },
  },
  {
    name: "hamster1",
    img: "/assets/prod/2.png",
    defaultPosition: { x: 30, y: -150 },
  },
  {
    name: "hamster2",
    img: "/assets/prod/3.png",
    defaultPosition: { x: -130, y: -30 },
  },
  {
    name: "hamster3",
    img: "/assets/prod/4.png",
    defaultPosition: { x: 150, y: -50 },
  },
  {
    name: "hamster4",
    img: "/assets/prod/5.png",
    defaultPosition: { x: -100, y: 30 },
  },
  {
    name: "1",
    img: "/assets/prod/6.png",
    defaultPosition: { x: 300, y: 0 },
  },
  {
    name: "hamster6",
    img: "/assets/prod/7.png",
    defaultPosition: { x: 30, y: -150 },
  },
  {
    name: "hamster7",
    img: "/assets/prod/8.png",
    defaultPosition: { x: 30, y: -150 },
  },
];
export default function PlayGround() {
  const [tempElement, setTempElement] = useState<HTMLElement>();
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [curname, setCurname] = useState("");

  useEffect(() => {
    if (containerRef.current) {
      setTempElement(containerRef.current);
      const containerWidth = containerRef.current.clientWidth;
      console.log("Container Width:", containerWidth);
      // 여기서 containerWidth 변수를 사용하여 원하는 작업 수행 가능
    }
  }, []);
  return (
    <PlayGroundWrap ref={containerRef}>
      {prodList.map((x, index) => {
        return (
          <Item
            key={x.name}
            defaultPosition={x.defaultPosition}
            containerRef={tempElement}
            name={x.name}
            curname={curname}
            setCurname={setCurname}
          >
            <Image
              src={x.img}
              width={300}
              height={300}
              alt={x.name}
              loading="lazy"
            />
            <p>{x.name}</p>
          </Item>
        );
      })}
    </PlayGroundWrap>
  );
}
