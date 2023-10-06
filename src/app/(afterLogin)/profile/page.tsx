"use client";

import { gql } from "graphql-request";
import graphQLClient from "../../../../gclient";
import { useState, useEffect } from "react";

interface content {
  email: string;
  tweet: Array<{ content: string }>;
}

export async function getUserById(id) {
  const QUERY_USER_ID = gql`
    query ExampleQuery($id: ID!) {
      queryUserByEmail(id: $id) {
        email
        tweet {
          content
        }
      }
    }
  `;
  const variables = {
    id: id,
  };
  const result = await graphQLClient.request(QUERY_USER_ID, variables);
  console.log("RESULT", result);
  return {
    result,
  };
}
const Profile = ({ searchParams }) => {
  const [content, setContent] = useState<content>();
  const { id } = searchParams;

  useEffect(() => {
    getUserById(id).then((d) => {
      setContent(d.result.queryUserByEmail);
      d.result.queryUserByEmail.tweet.map((i) => {
        console.log(i.content);
      });
    });
  }, []);
  return (
    <div>
      <h1 className="text-lg">UserProfile {content?.email}</h1>
      {content?.tweet.map((i) => (
        <div className="p-2 border-y border-black flex flex-col">
          <p>{i.content}</p>
          <p>by {content.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
