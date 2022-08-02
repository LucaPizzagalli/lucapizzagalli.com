import React from 'react';

import Menu from "./menu"

import "../assets/layout.css"

function Layout({ loop, location, children }) {
    return (
        <div className="page">
            <Menu loop={loop} location={location} />
            <main>{children}</main>
        </div>
    )
}

export default Layout
