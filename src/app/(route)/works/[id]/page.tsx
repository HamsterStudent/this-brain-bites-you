"use client";

import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface IData {
  id: string;
  name: string;
  tag: string[];
  img: string[];
  size: number;
  exp: string;
  description: string;
}

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
            <div>{data.description}</div>
            <div>{data.exp}</div>
            <div>
              <img src="/assets/prod/6.png" alt={`${data.name}`} />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
