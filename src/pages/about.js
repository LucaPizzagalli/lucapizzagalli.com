import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from '@material-ui/core/Button';

class AboutPage extends React.Component {
  render() {
    let level = 0;
    if (this.props.level)
      level = this.props.level;
    return (
  <Layout level={level} active={this.props.active}>
    <SEO title="Contacts" />
    <h1>About me</h1>
    <Button variant="contained" color="primary">Download CV</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
    );
  }
}

export default AboutPage
