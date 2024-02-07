import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { NextRequest } from "next/server";

let products = [
  {
    id: "1",
    name: "어른의 이빨요정",
    tag: ["acc"],
    img: ["/assets/prod/6.png"],
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

  type Product {
    id: ID!
    name: String!
    tag: [String]
    img: [String]
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
