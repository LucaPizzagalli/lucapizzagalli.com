import React from 'react';

import Menu from "./menu";

import "../assets/style/style.css";
import "../assets/style/layout.css";


function Layout({ loop, location, children }) {
  return (
    <div className="page">
      <main>{children}</main>
      <Menu loop={loop} location={location} />
    </div>
  );
}


export default Layout
