import { gql } from "apollo-boost";

export default gql`
  query {
    foodEntries {
      id
      name
      isEnabled
    }
  }
`;
