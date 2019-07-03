import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


function Layout(props) {
  return (
    <div className="page">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
