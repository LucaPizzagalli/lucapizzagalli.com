# Personal website

<http://lucapizzagalli.com>.

[SolidStart](https://start.solidjs.com) with the static prerender preset.
Deployed to GitHub Pages.

## Install

```sh
npm install
```

## Develop

```sh
npm run dev
```

Serves at <http://localhost:3000>.

## Build

```sh
npm run build
```

Static output ends up in `.output/public/`. Preview it with `npx serve .output/public`.

## Deploy

```sh
npm run deploy
```

Builds, then pushes `.output/public/` to the `master` branch via `gh-pages`.

## Layout

```
src/
  app.jsx              router root with MetaProvider, Analytics, FilterDefs
  entry-{server,client}.jsx   solidstart entry points
  style.css            global styles
  components/          Layout, Menu (foldable + loop-aware), SEO, Math, Deck, Analytics, FilterDefs
  data/
    things.js          project cards on /things
    posts.js           blog posts on /words (also feeds rss.xml)
  lib/
    loopState.js       signals backing the recursive /loop joke
  routes/
    index.jsx, about.jsx, the-void.jsx, [...404].jsx
    things/            listing + reveal.js decks (bordir, micro-swimmers)
    words/             listing + posts (one .jsx per post)
    loop/              the recursive page (state-based, URL stays /loop)

scripts/build-rss.js   regenerates public/rss.xml from src/data/posts.js
                       (auto-runs via predev / prebuild)
```

Posts are written as Solid components — there is no markdown pipeline. Math
uses KaTeX via the `<Math>` component; slide decks use reveal.js via `<Deck>`.
