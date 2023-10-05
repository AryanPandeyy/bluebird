"use client";
import { gql } from "graphql-request";
import { useState, useEffect } from "react";
import graphQLClient from "../../../gclient";

async function getQuery() {
  const QUERY_TWEET = gql`
    query example {
      queryUserById {
        email
        id
      }
    }
  `;
  const result = await graphQLClient.request(QUERY_TWEET);
  console.log("RESULT", result);
  return {
    result,
  };
}

const CreateTweet = () => {
  const [newTweet, setNewTweet] = useState("");
  const [userEmail, setUserEmail] = useState<string>("");
  const CREATE_TWEET = gql`
    mutation createTweet($content: String!) {
      createTweet(content: $content)
    }
  `;
  const variables = {
    content: newTweet,
  };
  const handleSubmitTweet = (): void => {
    const data = graphQLClient
      .request(CREATE_TWEET, variables)
      .then((content) => console.log(content))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const data = getQuery();
    data.then((d) => setUserEmail(d.result.queryUserById.email));
  }, []);

  return (
    <div>
      {userEmail && <p>{userEmail}</p>}
      <input
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
        className="w-full p-2 rounded-sm ring-1 ring-gray-300 placeholder:text-gray-400 block"
      />
      <button
        onClick={handleSubmitTweet}
        className="mt-2 w-full rounded-sm ring-1 ring-gray-300 py-1.5 font-semibold hover:ring-teal-400"
      >
        Tweet
      </button>
    </div>
  );
};
export default CreateTweet;
