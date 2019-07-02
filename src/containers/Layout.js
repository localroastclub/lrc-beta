import React from 'react';

import Header from '../components/sales/Header';
import NavBar from './NavBar';
import Footer from './Footer';


function Layout(props) {
  return (
    <div className="page">
      <NavBar />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
