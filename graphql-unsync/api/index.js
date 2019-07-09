const { ApolloServer, gql } = require('apollo-server');

const memory = [
  {
    id: 'pizza',
    name: 'Pizza',
    isEnabled: true,
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    isEnabled: true,
  },
];

// The GraphQL schema
const typeDefs = gql`
  type FoodEntry {
    id: ID!
    name: String
    isEnabled: Boolean
  }
  type Query {
    foodEntries: [FoodEntry]!
  }
  type Mutation {
    checkFoodEntry(id: ID!, isEnabled: Boolean!): FoodEntry
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    foodEntries: () => memory,
  },
  Mutation: {
    checkFoodEntry: (_, { id, isEnabled }) => {
      let found = { id, isEnabled };
      memory.forEach((entry) => {
        if (entry.id === id) {
          entry.isEnabled = isEnabled;
          found = entry;
        }
      });
      return found;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
