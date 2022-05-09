import { gql } from "@apollo/client";

export const QUERY_PERSON = gql`
  query Person($name: String!) {
    person(name: $name) {
      person {
        name
        mass
        gender
        height
        homeworld
      }
      success
      errorMsg
    }
  }
`;
