import React from "react";
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from "../components/layout";
import HeadTags from "../components/head-tags";


function PostList() {
  let data = useStaticQuery(graphql`
            query PostList {
              allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/(words)/"  }}
                sort: {frontmatter: {date: DESC}}
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
          `)
  return (
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
  )
}


function BlogPage({ loop }) {
  return (
    <Layout loop={loop} location="/words">
      <h1>Words</h1>
      <p>I wrote something once. Let's call it a blog.</p>
      <PostList />
      <p>
        If you want to receive the new posts I will (not) write,
        here you have a <a href="/rss.xml">RSS feed</a> and a <a href="/words/newsletter.html">newsletter</a>.
        </p>
    </Layout>
  );
}


export function Head(){
  return <HeadTags title="Words" description="" />;
}
export default BlogPage
