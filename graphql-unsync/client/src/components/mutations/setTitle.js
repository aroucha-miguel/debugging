import { gql } from "apollo-boost";

export default gql`
  mutation($title: String!) {
    setTitle(title: $title) @client
  }
`;
