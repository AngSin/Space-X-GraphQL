import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="Space X" style={{ width: 300, display: 'block', margin: 'auto' }}/>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launches/:flight_number" component={Launch} />
          </div>
          
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
