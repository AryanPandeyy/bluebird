import { QueryDocumentKeys } from "graphql/language/ast";
import graphQLClient from "../../../gclient";
import { graphql } from "../../../gql";
import { QueryTweetDocument, QueryTweetQuery } from "../../../gql/graphql";

// async function getData() {
//   const query_tweet = gql`
//     query queryTweet {
//       queryTweets {
//         content
//         author {
//           email
//         }
//       }
//     }
//   `;
//   const data = await graphQLClient
//     .request(query_tweet)
//     .then((content) => console.log(content))
//     .catch((e) => console.log(e));
//   return data;
// }
const Landing = async () => {
  const QUERY_TWEET = graphql(`
    query queryTweet {
      queryTweets {
        content
        author {
          email
        }
      }
    }
  `);
  const result = await graphQLClient
    .request(QUERY_TWEET)
    .then((content) => console.log(content))
    .catch((e) => console.log(e));

  /* const temp = await getData(); */
  /* console.log(temp); */
  return (
    <div className="flex-1 flex-wrap">
      <div className="p-2 w-full flex flex-col">
        <p>username</p>
      </div>
      <p>tweet</p>
    </div>
  );
};
export default Landing;
