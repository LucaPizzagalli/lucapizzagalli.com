import React from "react";
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Image } from "../components/image";

import Grid from '@material-ui/core/Grid';

const ImageMe = () => (
  <StaticQuery
    query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "me.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

class IndexPage extends React.Component {
  render() {
    return (
      <Layout handler={this.props.handler} selected="/">
        <SEO title="Luca Pizzagalli" />
        <h1>Hello.</h1>
        <Grid container spacing={10}>
          <Grid item sm={12} md={6}>
            <p>I'm Luca.</p>
            <p>The place you are now in is the website I put together in a bunch of days for declaring to the world that I'm looking for a job. A job in data science, or something related. Every place in the world is fine.</p>
            <p>Now go build something great.</p>
          </Grid>
          <Grid item sm={12} md={6}>
            <div style={{ maxWidth: `300px`, margin: `0 auto` }}>
              <ImageMe />
            </div>
          </Grid>
        </Grid>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Layout>
    );
  }
}

export default IndexPage
