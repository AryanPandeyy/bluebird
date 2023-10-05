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
    <div className="grid grid-cols-6 h-full">
      <div className="border-2 border-r-black">
        <CreateTweet />
      </div>
      <div className="col-start-2 col-end-5">
        {temp.result.queryTweets?.map((item, i, arr) => (
          <div>
            <p>{item?.content}</p>
            <p>{item?.author?.email}</p>
          </div>
        ))}
      </div>
      <div className="border-2 border-l-black col-start-5 col-end-6"></div>
    </div>
  );
};
export default Landing;
