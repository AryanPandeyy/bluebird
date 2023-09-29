"use client";
import request, { GraphQLClient, gql } from "graphql-request";
import { graphql } from "../../gql";
import { CreateUserMutationVariables } from "../../gql/graphql";
import useSWR from "swr";
import graphQLClient from "../../gclient";
export default function Home() {
  /* const endpoint = `http://localhost:4000/graphql`;
   * const graphQLClient = new GraphQLClient(endpoint); */

  const userMut = graphql(`
    mutation createUser($message: createUserInput) {
      createUser(message: $message)
    }
  `);
  const userQuery = gql`
    query ExampleQuery {
      queryUser {
        email
      }
    }
  `;
  const variables: CreateUserMutationVariables = {
    message: {
      email: `mar`,
      name: `aryansda`,
      password: `angraph`,
    },
  };
  const handleSubmit = async (): Promise<void> => {
    const data = await graphQLClient
      .request(userMut, variables)
      .then((data) => console.log(data))
      .catch((e) => console.log("ERROR: in submitting ", e));
  };
  return (
    <>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
