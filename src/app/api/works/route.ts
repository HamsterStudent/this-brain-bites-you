import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { NextRequest } from "next/server";

let products = [
  {
    id: "1",
    name: "어른의 이빨요정",
    tag: ["acc"],
    icon: "/assets/prod/6.png",
    iconPosition: { x: 300, y: 0 },
    img: ["/assets/prod/6.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "2",
    name: "햄스터2",
    tag: ["acc"],
    icon: "/assets/prod/1.png",
    iconPosition: { x: 0, y: 0 },
    img: ["/assets/prod/2.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "3",
    name: "햄스터3",
    tag: ["acc"],
    icon: "/assets/prod/2.png",
    iconPosition: { x: 30, y: -150 },
    img: ["/assets/prod/2.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "4",
    name: "햄스터4",
    tag: ["acc"],
    icon: "/assets/prod/3.png",
    iconPosition: { x: -130, y: -30 },
    img: ["/assets/prod/6.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "5",
    name: "햄스터5",
    tag: ["acc"],
    icon: "/assets/prod/4.png",
    iconPosition: { x: 150, y: -50 },
    img: ["/assets/prod/6.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "6",
    name: "햄스터6",
    tag: ["acc"],
    icon: "/assets/prod/5.png",
    iconPosition: { x: -100, y: 30 },
    img: ["/assets/prod/6.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "7",
    name: "햄스터7",
    tag: ["acc"],
    icon: "/assets/prod/8.png",
    iconPosition: { x: 300, y: 0 },
    img: ["/assets/prod/6.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
  {
    id: "8",
    name: "햄스터8",
    tag: ["acc"],
    icon: "/assets/prod/7.png",
    iconPosition: { x: 30, y: -150 },
    img: ["/assets/prod/6.png"],
    material: "silver",
    size: 3.5,
    exp: "2023",
    description: "치아관리 잘하세요 찾아가기 전에",
  },
];

const typeDefs = gql`
  type Query {
    allProducts: [Product]
    product(id: ID!): Product
    productsCate(tag: [String]): [Product]
  }
  type IconPosition {
    x: Float!
    y: Float!
  }
  type Product {
    id: ID!
    name: String!
    tag: [String]
    icon: String
    iconPosition: IconPosition
    img: [String]
    material: String
    size: Float
    exp: String
    description: String
  }
`;

const resolvers = {
  Query: {
    allProducts() {
      return products;
    },
    product(__: any, { id }: { id: string }) {
      return products.find((prod) => prod.id === id);
    },
    productsCate(__: any, { tag }: { tag: [String] }) {
      return products.filter((product) =>
        product.tag.some((x) => tag.includes(x)),
      );
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
