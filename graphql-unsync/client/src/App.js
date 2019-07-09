import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import MainScreen from './components/MainScreen';
import TITLE from './components/queries/title';

const client = new ApolloClient({
  uri: "http://localhost:4000",
  clientState: {
    defaults: {
      title: 'hello there',
    },
    resolvers: {
      Mutation: {
        setTitle: (_, { title }, { cache }) => {
          cache.writeQuery({
            query: TITLE,
            data: {
              title,
            }
          });
        }
      }
    },
  },

});

function App() {
  return (
    <ApolloProvider client={client}>
      <MainScreen />
    </ApolloProvider>
  );
}

export default App;
