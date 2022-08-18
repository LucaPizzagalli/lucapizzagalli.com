import React from "react";
import { graphql, StaticQuery, Link } from 'gatsby'

import Layout from "../components/layout";
import Seo from "../components/seo";


function PostList() {
    return (
        <StaticQuery
            query={graphql`
            query PostList {
              allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/(blog)/"  }}
                sort: {order: DESC, fields: [frontmatter___date]}
              ) {
                edges {
                  node {
                    frontmatter {
                      url
                      date
                      title
                    }
                  }
                }
              } 
            }
          `}
            render={data => (
                <ul>
                    {data.allMarkdownRemark.edges.map(edge => {
                        let { frontmatter } = edge.node;
                        return (
                            <li key={frontmatter.url}>
                                <Link to={frontmatter.url}>{frontmatter.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            )}
        />
    )
}


function BlogPage({ loop }) {
    return (
        <Layout loop={loop} location="/blog">
            <Seo title="Blog" description="" lang="en" meta={[]} />
            <h1>Blog</h1>
            <p>I wrote something once. Let's call it a blog.</p>
            <PostList />
            <p>If you want to receive the new posts I will (not) write, here you have a <a href="/rss.xml">RSS feed</a> and a <a href="newsletter.html">newsletter</a>.</p>
        </Layout>
    );
}

export default BlogPage
