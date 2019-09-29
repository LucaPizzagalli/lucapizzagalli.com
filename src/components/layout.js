import React from "react"
import PropTypes from "prop-types"

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from "./header"
import "./layout.css"

class Layout extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Header handler={this.props.handler} selected={this.props.selected} />
        <Container style={{
          maxWidth: 1400,
          padding: `3rem 6% 1rem 6%`,
        }}>
          <main>{this.props.children}</main>
        </Container>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
