import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, description, pathname }) {
  let data = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
            siteUrl
            title
            description
            author
        }
      }
    }
  `);
  let { title: defaultTitle, description: defaultDescription, image, siteUrl, } = data.site.siteMetadata;
  let seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
    </>
  );
}


export default Seo
