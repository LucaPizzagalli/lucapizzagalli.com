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
        maxWidth: 1400,
        padding: `3rem 6% 0rem 6%`,
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
