import { gql } from "apollo-boost";

export default gql`
  mutation($id: ID!, $isEnabled: Boolean!) {
    checkFoodEntry(id: $id, isEnabled: $isEnabled) {
      id
      name
      isEnabled
    }
  }
`;
