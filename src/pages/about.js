import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

function AboutPage({handler}) {
    return (
      <Layout handler={handler} selected="/about">
        <Seo title="Contacts" description="" lang="en" meta={[]} />
        <h1>About me</h1>
        <div style={{display: "flex", justifyContent: "center", margin: "0 0 5rem 0"}}>
        <a href="/curriculumLucaPizzagalli.pdf" target="_blank" style={{padding: "2rem"}}>Curriculum</a>
        <a href="https://www.linkedin.com/in/luca-pizzagalli" style={{padding: "2rem"}}>LinkedIn</a>
        <a href="https://github.com/LucaPizzagalli" style={{padding: "2rem"}}>GitHub</a>
        </div>
        <p>Or, you can contact me at: <strong><a href="mailto:mail@lucapizzagalli.com">mail@lucapizzagalli.com</a></strong></p>
      </Layout>
    );
}

export default AboutPage
