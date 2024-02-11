import React, { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Item from "./item";
import Image from "next/image";
import axios from "axios";

const PlayGroundWrap = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  border: dotted 1px;
  overflow: hidden;
`;

interface IData {
  id: string;
  name: string;
  tag: string[];
  icon: string;
  iconPosition: { x: number; y: number };
  img: string[];
  material: string;
  size: number;
  exp: string;
  description: string;
}
[];
export default function PlayGround() {
  const [tempElement, setTempElement] = useState<HTMLElement>();
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [curname, setCurname] = useState("");

  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      setTempElement(containerRef.current);
      const containerWidth = containerRef.current.clientWidth;
      console.log("Container Width:", containerWidth);
      // 여기서 containerWidth 변수를 사용하여 원하는 작업 수행 가능
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.post("/api/works", {
        query: `
        query {
          allProducts {
            name
            icon
            iconPosition{
              x
              y
            }
          }
        }
      `,
      });
      const {
        data: {
          data: { allProducts },
        },
      } = response;

      setData(allProducts);
      console.log(allProducts);
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      {data ? (
        <PlayGroundWrap ref={containerRef}>
          {data.map((x, index) => {
            return (
              <Item
                key={x.name}
                defaultPosition={x.iconPosition}
                containerRef={tempElement}
                name={x.name}
                curname={curname}
                setCurname={setCurname}
              >
                <Image
                  src={x.icon}
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
      ) : null}
    </>
  );
}
