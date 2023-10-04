import graphQLClient from "../../../gclient";
import { graphql } from "../../../gql";
import CreateTweet from "./CreateTweet";

export async function getData() {
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
  const result = await graphQLClient.request(QUERY_TWEET);
  console.log(result.queryTweets);
  return {
    result,
  };
}

const Landing = async () => {
  const temp = await getData();
  return (
    <div className="flex-1 flex-wrap">
      <CreateTweet />
      <div className="p-2 w-full flex flex-col">
        <p>username</p>
        {temp.result.queryTweets?.map((item, i, arr) => (
          <div>
            <p>{item?.content}</p>
            <p>{item?.author?.email}</p>
          </div>
        ))}
      </div>
      <p>tweet</p>
    </div>
  );
};
export default Landing;
