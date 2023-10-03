import { GraphQLClient } from "graphql-request";
// https://hackernoon.com/setting-up-a-graphql-server-and-client-in-nextjs
const endpoint = `http://localhost:4000/graphql`;
const graphQLClient = new GraphQLClient(endpoint, {
  headers: () => ({
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFyeWFuIiwibmFtZSI6ImFyeWFuIiwicGFzc3dvcmQiOiIxMjMifQ.kQRjVSGi2hs7N8rwd-211R_kvEiL_y1cKbloNFyzBuQ`,
  }),
});
export default graphQLClient;
