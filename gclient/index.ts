import { GraphQLClient } from "graphql-request";
// https://hackernoon.com/setting-up-a-graphql-server-and-client-in-nextjs
const endpoint = `http://localhost:4000/graphql`;
const isClient = typeof window !== "undefined";
const graphQLClient = new GraphQLClient(endpoint, {
  headers: () => ({
    Authorization: isClient
      ? `Bearer ${window.localStorage.getItem("key")}`
      : "",
  }),
});
export default graphQLClient;
