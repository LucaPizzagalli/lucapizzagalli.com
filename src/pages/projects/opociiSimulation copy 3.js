import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Image from "../../components/image";
import Button from '@material-ui/core/Button';

const OpociiSimulation = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default OpociiSimulation
