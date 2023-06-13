import React from "react"
import { graphql } from "gatsby"

import "katex/dist/katex.min.css"

import Layout from "../components/layout";
import Seo from "../components/seo";

function MarkdownPage({ data }) {
    let { markdownRemark } = data;
    let { frontmatter, html } = markdownRemark;
    return (
        <Layout location={frontmatter.url}>
            <Seo title={frontmatter.title} description={frontmatter.excerpt} lang="en" meta={[]} />

            <div
                dangerouslySetInnerHTML={{ __html: html }}
                // style={{display: "flex", flexDirection: "column"}}
            />
        </Layout>
    )
}

export const pageQuery = graphql`
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
export default MarkdownPage
