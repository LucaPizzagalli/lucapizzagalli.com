import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function generateMail(){
  let e = ".com";
  let d = "gmail";
  let a = "luca";
  let c = "@";
  let b = "pizzagalli";
  return(
    <b>{a+b+c+d+e}</b>
  );
}

class AboutPage extends React.Component {
  render() {
    return (
      <Layout handler={this.props.handler} selected="/about">
        <SEO title="Contacts" />
        <h1>About me</h1>
        <Button variant="contained" color="primary" href="/curriculumLucaPizzagalli.pdf" target="_blank">Download CV</Button>

        <Tooltip title="View the source on Github" placement="top" style={{ marginLeft: 'auto', }}>
          <IconButton href="https://github.com/LucaPizzagalli/">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" fill="grey" width="1em">
              <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
            </svg>
          </IconButton>
        </Tooltip>
        <p>Mail:{generateMail()}</p>
        <p>Now go build something great.</p>
      </Layout>
    );
  }
}

export default AboutPage
