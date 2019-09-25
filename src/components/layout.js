import React from "react"
import PropTypes from "prop-types"

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "./header"
import "./layout.css"

class Layout extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Header level={this.props.level} active={this.props.active}/>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1400,
            padding: `3rem 6% 1rem 6%`,
          }}
        >
          <main>{this.props.children}</main>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
