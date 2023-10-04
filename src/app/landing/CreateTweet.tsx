"use client";
import { gql } from "graphql-request";
import { useState } from "react";
import graphQLClient from "../../../gclient";

const CreateTweet = () => {
  const [newTweet, setNewTweet] = useState("");
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

  return (
    <div>
      <input value={newTweet} onChange={(e) => setNewTweet(e.target.value)} />
      <button onClick={handleSubmitTweet}>Tweet</button>
    </div>
  );
};
export default CreateTweet;
