import React from 'react';

import Header from '../components/sales/Header';
import NavBar from './NavBar';


function Layout(props) {
  return (
    <div className="page">
      <NavBar />
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
