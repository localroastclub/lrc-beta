import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import Layout from './containers/Layout';
import { AuthContext, reducer, initialState } from './contexts/AuthContext';

function App(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Router>
      <AuthContext.Provider value={{ state, dispatch }}>
        <Layout {...props}>
          <BaseRouter />
        </Layout>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
