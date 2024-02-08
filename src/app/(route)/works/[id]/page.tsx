"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface IData {
  id: string;
  name: string;
  tag: string[];
  img: string[];
  material: string;
  size: number;
  exp: string;
  description: string;
}

const ImgWrap = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Detail() {
  const router = useRouter();
  const pathnName = usePathname().replace("/works/", "");
  const [data, setData] = useState<IData>();

  useEffect(() => {
    fetchData();
  }, [data]);
  const fetchData = async () => {
    try {
      const response = await axios.post("/api/works", {
        query: `
        query {
          product(id: "${pathnName}") {
            description
            exp
            id
            img
            name
            size
            material
            tag
          }
        }
      `,
      });
      const {
        data: {
          data: { product },
        },
      } = response;
      setData(product);
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <div>
      {data ? (
        <>
          <div>
            <h1>{data.name}</h1>
            <div>{data.material}</div>
            <div>{data.size}cm</div>
            <div>{data.exp}</div>
            <div>{data.description}</div>
            {data.img.map((x) => {
              return (
                <ImgWrap key={x}>
                  <Image src={x} alt={x} fill={true} />
                </ImgWrap>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
