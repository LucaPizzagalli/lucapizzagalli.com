import React from "react";

import Layout from "../components/layout";
import HeadTags from "../components/head-tags";


function IndexPage({ loop }) {
  return (
    <Layout loop={loop} location="/">
      <h1>Hello.</h1>
      <div>
        <div>
          <p>I'm Luca.</p>
          <p>
            The place you are now in is the website I put together in a bunch of days for declaring to the world that
            <em style={{ textDecoration: "line-through" }}>I'm looking for a job</em> <strong>I found a job</strong>.
            A job in <strong>data science</strong>, or something related.
            Every place in <em style={{ textDecoration: "line-through" }}>the world</em> <strong>Berlin</strong> is fine.
            {/* Make yourself comfortable, grab a chair, grab a drink. */}
          </p>
        </div>
      </div>
    </Layout>
  );
}


export function Head(){
  return <HeadTags title="Luca Pizzagalli" description="" />;
}
export default IndexPage;
