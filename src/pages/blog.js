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
            <p className="main-text">I wrote something once. Let's call it a blog.</p>
            <PostList />
        </Layout>
    );
}

export default BlogPage
