module.exports = {
  siteMetadata: {
    siteUrl: `https://lucapizzagalli.com`,
    title: `Luca Pizzagalli website`,
    description: `Luca Pizzagalli personal website.`,
    author: `Luca Pizzagalli`,
  },
  plugins: [
  
    // Header
    `gatsby-plugin-react-helmet`,
  
    // Sourcing files from filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `equations`,
        path: `${__dirname}/src/assets/equations/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `things`,
        path: `${__dirname}/src/things/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },

    // Images
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `luca-pizzagalli-personal-website`,
        short_name: `luca-pizzagalli`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `minimal-ui`,
        icon: `src/assets/images/ico.png`,
      },
    },

    // Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 2000, showCaptions: true },
          },
          `gatsby-plugin-catch-links`,
        ],
      },
    },

    // Slides
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-transformer-katex`,
      options: {
        process: [
          {
            type: `EquationsYaml`,
            fields: [
              { equation: "id" },
              { equation: "eq" },
            ],
          },
        ],
      },
    },

    // Feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            output: "/rss.xml",
            title: "Things by Luca",
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.url,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.url,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: {fileAbsolutePath: {regex: "/(blog)/"  }}
                  sort: {frontmatter: {date: DESC}},
                ) {
                  nodes {
                    excerpt
                    html
                    frontmatter {
                      url
                      title
                      date
                    }
                  }
                }
              }
            `
          },
        ],
      },
    },

    // Analytics
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: 'lucapizzagalli',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
