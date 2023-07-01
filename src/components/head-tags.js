import React from "react"
import Seo from "./seo"

function HeadTags({ title, description, pathname, children }) {
  return (
    <>
      <Seo title={title} description={description} pathname={pathname}/>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="retro-image-filter" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feColorMatrix type="matrix" values=" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0s 0 0 0 1 0" in="SourceGraphic" />
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
            <feColorMatrix type="matrix" values=" .33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 2 0" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feBlend in2="SourceGraphic" mode="multiply" />
          </filter>
        </defs>
      </svg>
      {children}
    </>
  );
}


export default HeadTags
