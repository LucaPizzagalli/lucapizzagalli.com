import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo";
import Grid from '@material-ui/core/Grid';


class IndexPage extends React.Component {
  render() {
    return (
      <Layout handler={this.props.handler} selected="/">
        <Seo title="Luca Pizzagalli" description="" lang="en" meta={[]} />
        <h1>Hello.</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <p>I'm Luca.</p>
            <p>The place you are now in is the website I put together in a bunch of days for declaring to the world that <strong>I'm looking for a job</strong>. A job in <strong>data science</strong>, or something related. Every place in the world is fine.</p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ maxWidth: '300px', margin: '0 auto'}}>
              <StaticImage src="../images/me.png" alt="me" />
            </div>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default IndexPage
