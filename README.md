# Personal website

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## Preparing a site to go live

Create a production build

  gatsby build

View the production site locally

  gatsby serve

Once this starts, you can view your site at localhost:9000.

## Run a Lighthouse audit

...

## Deploying to a GitHub pages subdomain at github.io

The easiest way to push a Gatsby app to GitHub Pages is by using a package called gh-pages.

  npm install gh-pages --save-dev

add to package.json

  {
    "scripts": {
      "deploy": "gatsby build && gh-pages -d public -b master"
    }
  }

After running

  npm run deploy

you should see your website at username.github.io
