import { gql } from "graphql-request";
import graphQLClient from "../../../../gclient";
import { graphql } from "../../../../gql";
import CreateTweet from "./CreateTweet";
import Link from "next/link";

export async function getData() {
  const QUERY_TWEET = gql`
    query queryTweet {
      queryTweets {
        content
        author {
          email
          id
        }
      }
    }
  `;
  const result = await graphQLClient.request(QUERY_TWEET);
  console.log(result.queryTweets);
  return {
    result,
  };
}
const Landing = async () => {
  const temp = await getData();

  return (
    <div>
      {temp.result.queryTweets?.map((item, i, arr) => (
        <div className="p-2 border-y border-black flex flex-col">
          <p className="">{item?.content}</p>
          <Link
            className="text-sm text-gray-800"
            href={{
              pathname: "/profile/",
              query: { id: `${item?.author?.id}` },
            }}
          >
            by {item?.author?.email}
          </Link>
          {/* href={`/profile/${item?.author?.id}/`} */}
          {/* <p className="text-sm text-gray-800">by {item?.author?.id}</p> */}
        </div>
      ))}
    </div>
  );
};
export default Landing;
