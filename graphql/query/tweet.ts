import { graphql } from "../../gql";

export const queryTweet = graphql(`
  #graphql
 queryTweets {
    author {
      email
    }
    content
  }
`);
