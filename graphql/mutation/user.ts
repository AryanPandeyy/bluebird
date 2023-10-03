import { graphql } from "../../gql";

export const createUser = graphql(`
#graphql
createUser(message: $message) {
    token
    user {
      email
    }
  }
`);
export const signInUser = graphql(`
#graphql
  signInUser(email: $email, password: $password) {
    token
  }
`);
