"use client";
import { gql } from "graphql-request";
import Link from "next/link";
import { useState } from "react";
import graphQLClient from "../../../gclient";
import { graphql } from "../../../gql/gql";
import { CreateUserMutationVariables } from "../../../gql/graphql";
import { useRouter } from "next/navigation";
const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { push } = useRouter();
  const CREATE_USER = graphql(`
    mutation createUser($message: createUserInput) {
      createUser(message: $message) {
        token
        user {
          email
        }
      }
    }
  `);
  const variables: CreateUserMutationVariables = {
    message: {
      email: email,
      name: name,
      password: password,
    },
  };
  const handleSignUp = () => {
    const data = graphQLClient
      .request(CREATE_USER, variables)
      .then((content) =>
        window.localStorage.setItem("key", content.createUser?.token),
      )
      .catch((e) => console.log(e));
    push("/login");
  };
  return (
    <div className="flex flex-col justify-center min-h-full px-6 py-12 lg:px-6">
      <div className="mx-auto w-full max-w-sm">
        <h3 className="text-center text-xl text-gray-900">BlueBird</h3>
        <h2 className="text-center text-2xl mt-6">Sign up to your account</h2>
      </div>
      <div className="mt-10 mx-auto w-full max-w-sm">
        <input
          className="w-full p-2 rounded-t-lg ring-1 ring-gray-300 placeholder:text-gray-400 block"
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 ring-1 ring-gray-300 placeholder:text-gray-400 block sm:text-sm"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 rounded-b-lg ring-1 ring-gray-300 placeholder:text-gray-400 block sm:text-sm"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-6 w-full rounded-sm ring-1 ring-gray-300 py-1.5 font-semibold hover:ring-teal-400"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className="text-center mt-6 text-sm">
          Already a member?
          <Link
            className="px-1 font-semibold hover:text-teal-400"
            href="/login"
          >
            Login Now!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
