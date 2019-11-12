import React from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout(props) {
  return (
    <div className="page">
      <AuthContext.Consumer>
        {user => <NavBar user={user} />}
      </AuthContext.Consumer>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
