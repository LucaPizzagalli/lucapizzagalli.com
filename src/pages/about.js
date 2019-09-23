import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About me</h1>
    <Button variant="contained" color="primary">Download CV</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
