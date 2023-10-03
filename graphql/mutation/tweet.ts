import { graphql } from "../../gql";

export const createTweet = graphql(`
#graphql
createTweet(content: $content)
`);
