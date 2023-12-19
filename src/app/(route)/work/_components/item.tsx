import React, { ReactNode, useEffect, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";

const Content = styled.div`
  width: 150px;
  height: auto;
  display: inline-block;
  left: 35%;
  top: 35%;
  /* transform: translate(-50%, -50%); */
  position: absolute;
  &.active {
    p {
      background-color: plum;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;
const PreventDrag = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  top: 0;
  left: 0;
`;

export default function Item({
  children,
  defaultPosition,
  containerRef,
  name,
  curname,
  setCurname,
}: {
  children: ReactNode;
  defaultPosition: { x: number; y: number };
  containerRef: any;
  name: string;
  curname: string;
  setCurname: any;
}) {
  const nodeRef = React.useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // const router = useRouter();
  // const { id } = router.query;

  // const getData = async () => {
  //   const response = await axios.get(`API_ENDPOINT/posts/${id}`);
  //   const postData = response.data;
  // };

  const handleDrag = (e: any, ui: any) => {
    // ui 속성을 통해 드래그 중의 위치를 가져올 수 있음
    const { x, y } = ui;
  };
  useEffect(() => {
    console.log(containerRef);
  }, [containerRef]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { textContent, className },
    } = e;
    setCurname(`${textContent}`);
    if (className.indexOf("active") > -1) {
      setCurname("");
    }
  };
  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      defaultPosition={defaultPosition}
      scale={1}
      onDrag={handleDrag}
      offsetParent={containerRef}
    >
      <Content
        ref={nodeRef}
        className={curname === name ? "active" : undefined}
        onClick={(e) => {
          onClick(e);
        }}
      >
        {children}
        <PreventDrag />
      </Content>
    </Draggable>
  );
}
