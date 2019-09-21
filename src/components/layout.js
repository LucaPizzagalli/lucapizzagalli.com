import React from "react"
import PropTypes from "prop-types"

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
