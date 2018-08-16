import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import store from './store';
import cache from './data/cache';

import Home from './components/Home';

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div className="app">
            <Home />
          </div>
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App;
