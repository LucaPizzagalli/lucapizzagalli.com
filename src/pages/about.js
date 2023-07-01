import React from "react";

import Layout from "../components/layout";
import HeadTags from "../components/head-tags";

function AboutPage({ loop }) {
    return (
        <Layout loop={loop} location="/about">
            <h1>About me</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "0 auto 8rem auto", width: "100%", maxWidth: "48rem" }}>
                <a href="/curriculumLucaPizzagalli.pdf" target="_blank" >Curriculum</a>
                <a href="https://www.linkedin.com/in/luca-pizzagalli" >LinkedIn</a>
                <a href="https://github.com/LucaPizzagalli" >GitHub</a>
            </div>
            <p>Or, you can contact me at <a href="mailto:web@lucapizzagalli.com">web@lucapizzagalli.com</a>.</p>
        </Layout>
    );
}

export function Head(){
    return <HeadTags title="Contacts" description="" />;
  }
export default AboutPage
