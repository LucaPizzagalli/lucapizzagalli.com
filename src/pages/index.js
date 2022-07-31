import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo";


function IndexPage({ loop }) {
    return (
        <Layout loop={loop} location="/">
            <Seo title="Luca Pizzagalli" description="" lang="en" meta={[]} />
            <h1>Hello.</h1>
            <div>
                <div>
                    <p className="main-text">I'm Luca.</p>
                    <p className="main-text">
                        The place you are now in is the website I put together in a bunch of days for declaring to the world that <em style={{ textDecoration: "line-through" }}>I'm looking for a job</em> <strong>I found a job</strong>.
                        A job in <strong>data science</strong>, or something related. Every place in <em style={{ textDecoration: "line-through" }}>the world</em> <strong>Berlin</strong> is fine.</p>
                </div>
                <div>
                    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                        <StaticImage src="../images/me.png" alt="me" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage
