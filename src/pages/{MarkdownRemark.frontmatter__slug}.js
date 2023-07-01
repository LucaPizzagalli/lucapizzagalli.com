import React from "react";
import { graphql } from "gatsby";

import "katex/dist/katex.min.css";

import Layout from "../components/layout";
import HeadTags from "../components/head-tags";

function MarkdownPage({ data }) {
  let { frontmatter, html } = data.markdownRemark;
  return (
    <Layout location={frontmatter.url}>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      // style={{display: "flex", flexDirection: "column"}}
      />
    </Layout>
  )
}

export let pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        url
        title
      }
    }
  }
  `
export function Head({ data }) {
  let frontmatter = data.markdownRemark.frontmatter;
  return <HeadTags title={frontmatter.title} description={frontmatter.excerpt} />;
}
export default MarkdownPage
