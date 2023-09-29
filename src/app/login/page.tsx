"use client";
import { useState } from "react";
import graphQLClient from "../../../gclient";
import { CreateUserMutationVariables } from "../../../gql/graphql";
import { graphql } from "../../../gql";
import { gql } from "graphql-request";

export default function Login() {
  const userMut = graphql(`
    mutation createUser($message: createUserInput) {
      createUser(message: $message)
    }
  `);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userQuery = gql`
    query ExampleQuery {
      queryUser {
        email
      }
    }
  `;
  const handleSubmit = () => {
    const variables: CreateUserMutationVariables = {
      message: {
        email: email,
        name: name,
        password: password,
      },
    };
    const data = graphQLClient
      .request(userQuery)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
