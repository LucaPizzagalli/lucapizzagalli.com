import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

let posts_data = [
  {
    title: "Maximum Likelihood is a Lie.",
    url: "https://lucapizzagalli.github.io/blog/MaximumLikelihood/maximumLikelihood.html",
  }
]

function BlogPage({ handler }) {
  return (
    <Layout handler={handler} selected="/blog">
      <Seo title="blog" description="" lang="en" meta={[]} />
      <h1>Blog</h1>
      <menu>
        {posts_data.map(data => (
          <li key={data.url}><a href={data.url}>{data.title}</a></li>
        ))}
      </menu>
    </Layout>
  );
}

export default BlogPage
