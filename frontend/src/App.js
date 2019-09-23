import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import Layout from './containers/Layout';

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

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
