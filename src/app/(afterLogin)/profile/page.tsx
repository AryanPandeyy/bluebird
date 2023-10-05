"use client";

import { gql } from "graphql-request";
import graphQLClient from "../../../../gclient";

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
  const { id } = searchParams;
  const data = getUserById(id);
  return (
    <div>
      {data.then((d) => (
        <div>
          <p>{d.result.queryUserByEmail.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
