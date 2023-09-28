"use client";
import { GraphQLClient, gql } from "graphql-request";
export default function Home() {
  const endpoint = `http://localhost:4000/graphql`;
  const graphQLClient = new GraphQLClient(endpoint);

  const mutation = gql`
    mutation createUser($message: createUserInput) {
      createUser(message: $message)
    }
  `;

  const variables = {
    message: {
      email: `graph`,
      name: `graph`,
      password: `graph`,
    },
  };
  const handleSubmit = async (): Promise<void> => {
    const data = await graphQLClient
      .request(mutation, variables)
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
