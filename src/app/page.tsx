"use client";
import { GraphQLClient } from "graphql-request";
import { graphql } from "../../gql";
import { CreateUserMutationVariables } from "../../gql/graphql";
export default function Home() {
  const endpoint = `http://localhost:4000/graphql`;
  const graphQLClient = new GraphQLClient(endpoint);

  const userMut = graphql(`
    mutation createUser($message: createUserInput) {
      createUser(message: $message)
    }
  `);
  const variables: CreateUserMutationVariables = {
    message: {
      email: `graph`,
      name: `graph`,
      password: `graph`,
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
      {/* <form method="" id="" action="">
        <input type="" name="" value="" />
      </form> */}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
