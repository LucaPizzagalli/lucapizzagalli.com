import React, { useState } from 'react';

import Layout from "../components/layout";
import IndexPage from "./index";
import ThingsPage from "./things";
import AboutPage from "./about";
import BlogPage from "./words";

let texts = [
  "Well, you are already seeing my website. Anyway, here it is again.",
  "Mmm... Sure, same stuff.",
  "Yeah, it works, it just goes on.",
  "Yup, nothing new.",
  "...",
  "Ehm... what are you looking for?",
  "...Still here. I see.",
  "...",
  "...",
  "Congratulation! You won! There is nothing more. You can stop now.",
  "Daamn.",
  "You know, sometimes it fells quite lonely down here.",
  "They all just want. Click here, click there... Give me this page, show me that text... But you are different, you care.",
  "I'm starting to like you ;)",
  "Oh! something weird is happening, I think you're going to deep.",
  "Whoaaaoaah! You have to stop it!",
  "Screw you, I'll try to fix that.",
  "Maybe if I restart it...",
]

function LoopPage({ loop = { level: 0 } }) {
  let [page, setPage] = useState(<IndexPage />);

  let setUrl = (url) => {
    if (url === "/")
      setPage(<IndexPage />);
    else if (url === "/things")
      setPage(<ThingsPage />);
    else if (url === "/about")
      setPage(<AboutPage />);
    else if (url === "/words")
      setPage(<BlogPage />);
    else if (url === "/loop")
      setPage(<LoopPage />);
  }
  let next_loop = { level: loop.level + 1, setUrl: setUrl };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
        <defs>
          <filter id="retro-image-filter" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feColorMatrix type="matrix" values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0" in="SourceGraphic" />
            <feComponentTransfer> <feFuncR type="table" tableValues="0.4 0" /> <feFuncG type="table" tableValues="0.4 1" />
              <feFuncB type="table" tableValues="0.4 0.44" /> <feFuncA type="table" tableValues="0 1" /> </feComponentTransfer>
            <feBlend in2="SourceGraphic" mode="hue" />
          </filter>
          <filter id="noise2-filter" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence baseFrequency="0.01 0.4" result="turbulence" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="12" xChannelSelector="R" yChannelSelector="R">
            </feDisplacementMap>
          </filter>
          <filter id="noise-filter">
            <feTurbulence baseFrequency="0.60,0.90" />
            <feColorMatrix type="matrix" values=".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 2 0" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feBlend in2="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>
      <Layout loop={loop} location="/loop">
        <h1>My website</h1>
        <p>{texts[loop.level % texts.length]}</p>
        <div style={
          loop.level % texts.length === 15 ?
            { border: "3px solid var(--highlight-color)", filter: "var(--noise-filter)" }
            :
            { border: "3px solid var(--highlight-color)" }}>
          {
            React.cloneElement(page, { loop: next_loop })
          }
        </div>
      </Layout>
    </>
  );
}

export default LoopPage
