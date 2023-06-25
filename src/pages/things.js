import React from "react";
import { graphql, StaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout";
import Seo from "../components/seo";


function ProjectCard({ loop, data }) {
    let image = getImage(data.previewImage);
    return (
        <section className="card">
            {data.url === "nope" ?
                loop ?
                    <a href={() => false} onClick={() => loop.setUrl("/loop")}
                        style={{ cursor: "pointer" }}
                    >
                        <GatsbyImage image={image} alt={data.altText} style={{marginBottom: "2rem"}}/>
                        <h2 className="internal-text"> {data.title} </h2>
                    </a>
                    :
                    <Link to={"/loop"}>
                        <GatsbyImage image={image} alt={data.altText} style={{marginBottom: "2rem"}} />
                        <h2 className="internal-text"> {data.title} </h2>
                    </Link>
                :
                data.staticLink ?
                    <a href={data.url}>
                        <GatsbyImage image={image} alt={data.altText} style={{marginBottom: "2rem"}} />
                        <h2 className="internal-text"> {data.title} </h2>
                    </a>
                    :
                    <Link to={data.url}>
                        <GatsbyImage image={image} alt={data.altText} style={{marginBottom: "2rem"}}/>
                        <h2 className="internal-text"> {data.title} </h2>
                    </Link>
            }
            <p className="internal-text" style={{ flexGrow: 1 }}>{data.excerpt}</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {data.technologies.map(tech => (<div key={tech} className="chip" >{tech}</div>))}
                <div key="empty" style={{ flexGrow: 1 }}></div>
                {data.github &&
                    <a key="github" href={data.github} style={{ margin: "1rem" }} >GitHub</a>
                }
            </div>
        </section>
    );
}


function ThingsPage({ loop }) {
    return (
        <Layout loop={loop} location="/things">
            <Seo title="Things" description="" lang="en" meta={[]} />
            <h1>My projects</h1>
            <p>Some of the projects for which I have a nice pic.</p>
            <div className="grid" style={loop && loop.level > 8 ? { margin: "0rem" } : {}}>
                <StaticQuery
                    query={graphql`
                            query ProjectList {
                            allMarkdownRemark(
                              filter: {fileAbsolutePath: {regex: "/(things)/"  }}
                              sort: {frontmatter: {order: DESC}}
                            ) {
                              edges {
                                node {
                                  frontmatter {
                                    url
                                    title
                                    order
                                    previewImage {
                                      childImageSharp {
                                        gatsbyImageData(
                                          layout: FULL_WIDTH
                                        )
                                      }
                                    }
                                    altText
                                    staticLink
                                    excerpt
                                    technologies
                                    github
                                  }
                                }
                              }
                            } 
                          }
                        `}
                    render={data => (
                        data.allMarkdownRemark.edges.map(edge => {
                            let { frontmatter } = edge.node;
                            return (
                                <div key={frontmatter.url} className="grid-item"
                                    style={loop && loop.level > 8 ? { width: "100%" } : {}}
                                >
                                    <ProjectCard loop={loop} data={frontmatter} />
                                </div>
                            )
                        })
                    )}
                />
            </div>
        </Layout>
    );
}


export default ThingsPage
