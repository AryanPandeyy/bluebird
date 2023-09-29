import { GraphQLClient } from "graphql-request";
// https://hackernoon.com/setting-up-a-graphql-server-and-client-in-nextjs
const endpoint = `http://localhost:4000/graphql`;
const graphQLClient = new GraphQLClient(endpoint);
export default graphQLClient;
